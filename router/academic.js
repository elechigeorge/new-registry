const router = require('express').Router();
const { createAcademic, getAcademic, getAllAcademic } = require("../controllers/academic");
const { check } = require('express-validator');
const authenticate = require('../middleware/authenticate')


router
    .route('/')
    .post(authenticate, createAcademic)
    .get(authenticate, getAcademic)

router
    .route('/get')
    .get(getAllAcademic)


module.exports = router;