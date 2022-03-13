//routers for exams

/*
Pattern for exams CRUD opperations:
"GET http://<host>:<port>/api/exams" <-- gets all exams
"GET http://<host>:<port>/api/patients/<id>/exams" <-- returns all the exams that correspond to the given patient's id
"GET http://<host>:<port>/api/exams" <-- gets an exam with a specific id
"POST http://<host>:<port>/api/exams" <-- inserts a new defined exam into the collection
"PUT http://<host>:<port>/api//<id>" <-- updates the exam that corresponds to the given id
"DELETE http://<host>:<port>/api/exams/<id>" <-- deletes the exam with the conrresponding id
*/


const express = require('express')

const eController = require('../controllers/examsController')

const router = express.Router()



router.get("/exams", eController.getExams)
router.get("/patients/:patientId/exams", eController.getExamsOfPatient)
router.get("/exams/:id", eController.getExamByID)
router.post("/exams", eController.createExam)
router.put("/exams/:id", eController.updateExam)
router.delete("/exams/:id", eController.deleteExam)


module.exports = router