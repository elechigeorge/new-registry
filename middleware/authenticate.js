const { verify } = require('jsonwebtoken');
const User = require('../model/User')


module.exports = async function (req, res, next) {

    const token = req.header('auth-token');


    if (!token) {
        return res.status(401).json({ message: "Unauthorized, please login..." })
    }

    try {
        verify(token, process.env.jwtSecret, async (error, decoded) => {
            if (error) {
                return res.status(400).json({ message: "Authentication Error " + error })
            } else {

                req.user = await User.findById(decoded.user.id).select('-password')

                next();
            }
        })

    } catch (error) {
        res.status(500).json({ message: "Server Error" })

    }

}