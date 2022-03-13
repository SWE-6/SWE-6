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
  **/
  
const express = require('express')

const pController = require('../controllers/patientsController')

const router = express.Router()

//routers for patients
router.get('/patients', pController.getPatients);
router.get('/patients/:id', pController.getPatientByID);
router.post('/patients', pController.createPatient);
router.put('/patients/:id', pController.updatePatient);
router.delete('/patients/:id', pController.deletePatient);


module.exports = router