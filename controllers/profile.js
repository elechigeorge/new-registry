const Profile = require('../model/Profile');
const User = require('../model/User');
const { validationResult } = require('express-validator')


// get profile
const getProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user
        }).populate('user', ['avatar', 'fullname', 'email', 'staffId']);

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// get profile
const getAllProfile = async (req, res) => {
    try {
        const profile = await Profile.find({}).populate('user');

        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile ' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


// create profile
const createProfile = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
    const {
        name,
        department,
        // spread the rest of the fields we don't need to check
        ...rest
    } = req.body;

    // build a profile
    const profileFields = {
        user: req.user.id,
        ...rest
    };

    console.log(profileFields)



    try {
        // Using upsert option (creates new doc if no match is found):
        let profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        return res.json(profile);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};


module.exports = {
    createProfile,
    getProfile,
    getAllProfile
}