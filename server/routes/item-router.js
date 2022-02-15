const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

//routers for patients
router.get('/patients/', ItemController.getPatients);
router.get('/patients/:id', ItemController.getPatientByID);
router.post('/patients/', ItemController.createPatient);
router.put('/patients/:id', ItemController.updatePatient);
router.delete('/patients/:id', ItemController.deletePatient);
//rouers for exams
router.get("/patients/exams/", ItemController.getExams);
router.get("/patients/:id/exams/", ItemController.getExamsByID);
router.get("/patients/:id/exams/:id2", ItemController.getExamByIndex);
router.post("/patients/exams/", ItemController.createExam);
router.put("/patients/:id/exams/:id2", ItemController.updateExam);
router.delete("/patients/:id/exams/:id2", ItemController.deleteExam);

module.exports = router;
