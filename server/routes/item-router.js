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
router.get("/patients/exams/", ItemController.getImages);
router.get("/patients/:id/exams/", ItemController.getImagesByID);
router.get("/patients/:id/exams/:id2", ItemController.getImageByIndex);
router.post("/patients/exams/", ItemController.createImage);
router.put("/patients/:id/exams/:id2", ItemController.updateImage);
router.delete("/patients/:id/exams/:id2", ItemController.deleteImage);

module.exports = router;
