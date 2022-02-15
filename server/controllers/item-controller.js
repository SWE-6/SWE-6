/* eslint-disable no-undef, arrow-body-style */
//const Item = require('../models/item-model'); //from the template, deprecated
const patients = require("../models/patient-model.js");
const exams = require("../models/exam-model.js");
//NOTE:requiring express-async-handeler for eassy error handeling of async functions
const asyncHandler = require("express-async-handler");

/**@desc gets all the patients from the database
*/
getPatients = asyncHandler( async (req, res) => {
  const allPatients = await patients.find({}); //passed empty object returns all member of the set
  res.status(200).json(allPatients);
});

/**@desc returns patients that correspond to given id
*/
getPatientByID = asyncHandler( async (req, res) => {
  const patient = await patients.findById(req.params["id"]); //finding the patient
  res.status(200).json(patient);
});

createPatient = asyncHandler( async (req, res) => {
  const body = req.body;
  if (!body) //exception hadeling for body
  {
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newPatient = await patients.create(body);

  res.status(200).json(newPatient);
});

updatePatient = asyncHandler( async (req, res) => {
  const patient = await patients.findById(req.params["id"]); //finding the patient:
  if (!patient) //checking if patient was obtained
  {
    res.status(400);
    throw new Error("Patient was not found");
  }
  const updatedPatient = await patients.findByIdAndUpdate(req.params["id"], req.body, {new: true,}); //updating patient with ID using given body

  res.status(200).json(updatedPatient);
});

deletePatient = asyncHandler( async (req, res) => {
  //find patient before attempting to delete
  const patient = await patients.findById(req.params["id"]);
  if (!patient)
  {
    rest.status(400);
    throw new Error("Patient not found");
  }

  await patients.findOneAndDelete({_id: req.params.id}); //Did work

  res.status(200).json({_id: req.params["id"]}); //just return the id back
  //res.status(200).json(patient);
});

//CONTROLLERS for the exams:

/**@desc gets all the exams
*/
//FIXME: returns null for some reason
getExams = asyncHandler( async (req, res) => {
  const allExams = await exams.find({}); //passed empty object returns all member of the set
  res.status(200).json(allExams); //FIXME: change name to allExams
});

//
/**@desc gets exams of the corresponding patians by ID.
*/
//FIXME: returns null for some reason
getExamsByID = asyncHandler( async (req, res) => //FIXME: change name to getExamsByID
{
  const examOfPatient = await exams.find({patientID: req.params["id"]});

  if (!examOfPatient) //error handeling
  {
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(examOfPatient);
});

/**@desc gets an exam from a patient using a provided ID and index.
*/
getExamByIndex = asyncHandler( async (req, res) =>
{
  res.status(400).json( {message: "getExamByIndex called successfully"} );
});

/**@desc creates a new exam for a given patient by ID
*/
createExam = asyncHandler( async (req, res) =>
{
  const body = req.body;
  if (!body) //exception hadeling for body
  {
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newExam = await exams.create(body);

  res.status(200).json(newExam);
});

/**@desc updates an exam from a patient using a provided ID and index
*/
updateExam = asyncHandler( async (req, res) =>
{
  res.status(200).json( {message: "updateExam called successfully"} );
});

/**@desc deletes an exam from a patient using a provided ID and index
*/
deleteExam = asyncHandler( async (req, res) =>
{
  res.status(200).json( {message: "deleteExam called successfully"} );
});

module.exports = {
  getPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
  getExams,
  getExamsByID,
  getExamByIndex,
  createExam,
  updateExam,
  deleteExam,
};
