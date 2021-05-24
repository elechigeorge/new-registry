const router = require('express').Router();
const { createAdmin, getAdmin, authAdmin } = require("../controllers/admin");
const { check } = require('express-validator');
const authenticate = require('../middleware/authenticate')


// users
router
    .route('/')
    .post(createAdmin)
    .get(authenticate, getAdmin);

router.post('/login', authAdmin);







module.exports = router;