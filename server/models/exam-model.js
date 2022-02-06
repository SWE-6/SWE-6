const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Exam = new Schema(
    {
        patientId: {
            type: String,
            required: true
        },
        daysToImgStudy: {
            type: Number,
            required: true
        },
        hoursToImgStudy: {
            type: Number,
            required: true
        },
        imgDescription:  {
            type: String,
            required: true
        },
        studyModality: {
            type: String,
            required: true
        },
        oxygenAtImgStudy: {
            type: Number
        },
        keyFindings: {
            type: String,
            required: true
        },
        pngFilename: {
            type: String,
            required: true
        },
        examId: {
            type: Number,
            required: true
        }
    }
);

module.exports = mongoose.model('exam', Exam);