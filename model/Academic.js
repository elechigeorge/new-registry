const mongoose = require('mongoose');


const AcademicSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    designation: {
        type: String,
        required: true
    },
    fa_date: {
        type: Date
    },
    academic_qualification: {
        type: [String],
        required: true
    },
    est_structure: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    }


});


module.exports = mongoose.model('Academic', AcademicSchema);