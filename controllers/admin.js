const Admin = require('../model/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const getAdmin = async (req, res) => {

    try {
        const admin = await Admin.findById(req.user.id).select('-password');
        res
            .status(200)
            .json(admin);
    } catch (err) {
        console.error(err);
        res.status(500).send({ errors: [{ msg: "Can't be resolved" }] });
    }
};


const createAdmin = async (req, res) => {
    // grab user info from the body
    const { email, ...rest } = req.body;



    // errors instances 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check if user exists
    const userExist = await Admin.findOne({ email })

    if (userExist) {
        return res
            .status(409)
            .json({ errors: [{ msg: 'Admin conflict, pick a new one' }] })
    }

    try {
        // create a new admin instance
        const admin = await Admin.create({
            email,
            ...rest
        })


        // hash user password 
        bcrypt.genSalt(10, async (err, salt) => {
            if (err) throw err;
            // create hash
            const hashed = await bcrypt.hash(admin.password, salt);

            // generate token here
            const payload = {
                user: {
                    id: admin._id
                }
            };

            jwt.sign(
                payload,
                process.env.jwtSecret,
                { expiresIn: '3h' },
                (error, token) => {
                    if (error) throw error;

                    admin.token = token
                }
            )

            // save user
            admin.password = hashed;

            await admin.save();

            res.status(201).json(admin)
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ errors: [{ msg: 'Server Error, please try again ' }] })
    }
};


const authAdmin = async (req, res) => {
    // create error errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // grab user details
    const { email, password } = req.body;

    try {
        // find the user 
        let admin = await Admin.findOne({ email });

        // verify user details
        if (!admin) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        // check password validity
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const payload = {
            user: {
                id: admin._id
            }
        };

        jwt.sign(
            payload,
            process.env.jwtSecret,
            { expiresIn: '3h' },
            async (err, token) => {
                if (err) throw err;
                // set token and send user back
                admin.token = token;

                await admin.save();

                res.status(200).json(admin)
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ errors: [{ msg: 'Invalid Credentials' }] });
    }
}

module.exports = {
    createAdmin,
    getAdmin,
    authAdmin
}