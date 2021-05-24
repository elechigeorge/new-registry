const mongoose = require('mongoose');


const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String
    },
    fullname: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    gender: {
        type: String
    },
    file_no: {
        type: String
    },
    status: {
        type: String
    },
    marital_status: {
        type: String
    },
    children: {
        type: String
    },
    fa_date: {
        type: Date
    },
    upgrade_date: {
        type: Date
    },
    birth_date: {
        type: Date
    },
    lga: {
        type: String
    },
    state: {
        type: String
    },
    remark: {
        type: String
    }

});


module.exports = mongoose.model('Profile', ProfileSchema);