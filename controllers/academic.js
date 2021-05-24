const Profile = require('../model/Profile');
const Academic = require('../model/Academic')
const User = require('../model/User');
const { validationResult } = require('express-validator')


// get profile
const getAcademic = async (req, res) => {
    try {
        const academic = await Academic.findOne({
            user: req.user.id
        }).populate('user');

        if (!academic) {
            return res.status(400).json({ msg: 'There is no academic for this user' });
        }

        res.json(academic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// create profile
const createAcademic = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // destructure the request
    const {
        academic_qualification,
        est_structure,
        // spread the rest of the fields we don't need to check
        ...rest
    } = req.body;

    console.log(req.body)

    // build a profile
    const academicFields = {
        user: req.user.id,
        est_structure: Array.isArray(est_structure)
            ? est_structure
            : est_structure.split(','),
        academic_qualification: Array.isArray(academic_qualification)
            ? academic_qualification
            : academic_qualification.split(','),
        ...rest
    };

    console.log(academicFields)



    try {
        // Using upsert option (creates new doc if no match is found):
        let academic = await Academic.findOneAndUpdate(
            { user: req.user.id },
            { $set: academicFields },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
        return res.json(academic);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
};

// get profile
const getAllAcademic = async (req, res) => {
    try {
        const academic = await Academic.find({}).populate('user');

        if (!academic) {
            return res.status(400).json({ msg: 'There is no profile ' });
        }

        res.json(academic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


module.exports = {
    createAcademic,
    getAcademic,
    getAllAcademic
}