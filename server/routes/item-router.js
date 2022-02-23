/**
* Pedro Gutierrez Rincon
* 2022-02-15
* Here the patterns for the REST API are defined and what controller should act
* respectively.

THE API:
  Pattern for patients CRUD opperations:
"GET http://<host>:<port>/api/patients" <-- gets all patients
"GET http://<host>:<port>/api/patients/<id>" <-- gets patient with given ID
"POST http://<host>:<port>/api/patients" <-- inserts a new defined patient into the collection
"PUT http://<host>:<port>/api/patients/<id>" <-- updates the patient that corresponds to the given id
"DELETE http://<host>:<port>/api/patients/<id>" <-- deletes the patient with the corresponding id

  Pattern for exams CRUD opperations:
"GET http://<host>:<port>/api/exams" <-- gets all exams
"GET http://<host>:<port>/api/patients/<id>/exams" <-- returns all the exams that correspond to the given patient's id
"GET http://<host>:<port>/api/exams" <-- gets an exam with a specific id
"POST http://<host>:<port>/api/exams" <-- inserts a new defined exam into the collection
"PUT http://<host>:<port>/api//<id>" <-- updates the exam that corresponds to the given id
"DELETE http://<host>:<port>/api/exams/<id>" <-- deletes the exam with the conrresponding id
**/

const express = require('express');

const ItemController = require('../controllers/item-controller');

const router = express.Router();

//routers for patients
router.get('/patients', ItemController.getPatients);
router.get('/patients/:id', ItemController.getPatientByID);
router.post('/patients', ItemController.createPatient);
router.put('/patients/:id', ItemController.updatePatient);
router.delete('/patients/:id', ItemController.deletePatient);
//rouers for exams
router.get("/exams", ItemController.getExams);
router.get("/patients/:patientId/exams", ItemController.getExamsOfPatient);
router.get("/exams/:id", ItemController.getExamByID);
router.post("/exams", ItemController.createExam);
router.put("/exams/:id", ItemController.updateExam);
router.delete("/exams/:id", ItemController.deleteExam);

module.exports = router;
