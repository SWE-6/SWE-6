const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Exam = new Schema(
    {
      _id: {
          type: String,
          required: true
      },
        patientId: {
            type: String,
            required: true
        },
        keyFindings: {
            type: String,
            required: true
        },

        pngFilename: {
            type: String,
            required: true
        },
    }
)

module.exports = mongoose.model('exams', Exam);