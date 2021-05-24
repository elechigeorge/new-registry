const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp')



const UserSchema = mongoose.Schema({
    avatar: {
        type: String
    },
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    staffId: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
})

mongoose.plugin(timestamp);

const User = mongoose.model("User", UserSchema);

module.exports = User;