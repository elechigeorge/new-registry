const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
    name: {
        type: String
    },
    staffId: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    token: {
        type: String
    }

});


module.exports = mongoose.model('Admin', AdminSchema);