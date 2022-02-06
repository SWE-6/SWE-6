const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Patient = new Schema(
    {
        patientId: {
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
        weight: {
            type: Number,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        tuberculosis: {
            type: String,
            required: true
        },
        systemicLupusErythnatosus: {
            type: String,
            required: true
        },
        rheumatoidArthritis: {
            type: String,
            required: true
        },
        extensiveBurns: {
            type: String,
            required: true
        },
        asplenia: {
            type: String,
            required: true
        },
        hyposplenia: {
            type: String,
            required: true
        },
        measles: {
            type: String,
            required: true
        },
        cytomegalovirus: {
            type: String,
            required: true
        },
        chickenPox: {
            type: String,
            required: true
        },
        herpesZoster: {
            type: String,
            required: true
        },
        malnutrition: {
            type: String,
            required: true
        },
        currentPregnant: {
            type: String,
            required: true
        },
        chronicKidneyDisease: {
            type: String,
            required: true
        },
        diabetesType1: {
            type: String,
            required: true
        },
        diabetesType2: {
            type: String,
            required: true
        },
        transplant: {
            type: String,
            required: true
        },
        preDiagnosisHemodialysis: {
            type: String,
            required: true
        },
        postDiagnosisHemodialysis: {
            type: String,
            required: true
        },
        cancer: {
            type: String,
            required: true
        },
        covidPositive: {
            type: String,
            required: true
        },
        testName: {
            type: String,
            required: true
        },
        icuAdmittance: {
            type: String,
            required: true
        },
        numOfIcuAdmits: {
            type: Number,
            required: true
        },
        mortality: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('patient', Patient);
