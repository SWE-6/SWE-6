const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Patient = mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        race: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        },
        bmi: {
            type: Number,
            required: true
        },
       
    }
)

module.exports = mongoose.model('patients', Patient);
