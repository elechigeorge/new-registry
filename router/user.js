const router = require('express').Router();
const { getUser, createUser, authUser } = require("../controllers/user");
const { check } = require('express-validator');
const authenticate = require('../middleware/authenticate')


// users
router
    .route('/', check('fullname', 'Name is required').notEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters')
            .isLength({ min: 6 }))
    .post(createUser).get(authenticate, getUser);

router.post('/login', authUser);







module.exports = router;