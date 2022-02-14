const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

//routers for patients
router.get('/patients/', ItemController.getPatients);
router.get('/patient/:id', ItemController.getPatientByID);
router.post('/patients/', ItemController.createPatient);
router.put('/patient/:id', ItemController.updatePatient);
router.delete('/patient/:id', ItemController.deletePatient);
//rouers for images
router.get("/patients/images/", ItemController.getImages);
router.get("/patients/:id/images/:id", ItemController.getImageByIndex);
router.post("/patients/:id/images", ItemController.createImage);
router.put("/patients/:id/images/:id", ItemController.updateImage);
router.delete("/patients/:id/images/:id", ItemController.deleteImage);

module.exports = router;
