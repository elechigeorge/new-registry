const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res
            .status(200)
            .json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send({ errors: [{ msg: "Can't be resolved" }] });
    }
};


const createUser = async (req, res) => {
    // grab user info from the body
    const { avatar, fullname, staffId, role, email, password } = req.body;



    // errors instances 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check if user exists
    const userExist = await User.findOne({ email })

    if (userExist) {
        return res
            .status(409)
            .json({ errors: [{ msg: 'User conflict, pick a new one' }] })
    }

    try {
        // create a new user instance
        const user = await User.create({
            avatar,
            fullname,
            email,
            staffId,
            role,
            password
        })


        // hash user password 
        bcrypt.genSalt(10, async (err, salt) => {
            if (err) throw err;
            // create hash
            const hashed = await bcrypt.hash(user.password, salt);

            // generate token here
            const payload = {
                user: {
                    id: user._id
                }
            };

            jwt.sign(
                payload,
                process.env.jwtSecret,
                { expiresIn: '3h' },
                (error, token) => {
                    if (error) throw error;

                    user.token = token
                }
            )

            // save user
            user.password = hashed;

            await user.save();

            res.status(201).json(user)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ errors: [{ msg: 'Server Error, please try again ' }] })
    }
};


const authUser = async (req, res) => {
    // create error errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // grab user details
    const { email, password } = req.body;

    try {
        // find the user 
        let user = await User.findOne({ email });

        // verify user details
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        // check password validity
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: '3h' },
            async (err, token) => {
                if (err) throw err;
                // set token and send user back
                user.token = token;

                await user.save();

                res.status(200).json(user)
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ errors: [{ msg: 'Invalid Credentials' }] });
    }
}

module.exports = {
    createUser,
    getUser,
    authUser
}