const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

//routers for patients
router.get('/patients/', ItemController.getPatients);
router.get('/patients/:id', ItemController.getPatientByID);
router.post('/patients/', ItemController.createPatient);
router.put('/patients/:id', ItemController.updatePatient);
router.delete('/patients/:id', ItemController.deletePatient);
//rouers for images
router.get("/patients/images/", ItemController.getImages);
router.get("/patients/:id/images/", ItemController.getImagesByID);
router.get("/patients/:id/images/:id2", ItemController.getImageByIndex);
router.post("/patients/images/", ItemController.createImage);
router.put("/patients/:id/images/:id2", ItemController.updateImage);
router.delete("/patients/:id/images/:id2", ItemController.deleteImage);

module.exports = router;
