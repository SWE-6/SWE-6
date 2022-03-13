/**
* Pedro Gutierrez Rincon
* 2022-02-15
* the controllers for CRUD opperations are defined here.
* Called by router.
**/

/* eslint-disable no-undef, arrow-body-style */
//const Item = require('../models/item-model'); //from the template, deprecated
const patients = require("../models/patient-model.js");
const exams = require("../models/exam-model.js");
const asyncHandler = require("express-async-handler");

//CONTROLLERS for exams:

/**@desc gets all the exams
*/
getExams = asyncHandler( async (req, res) => {
  const allExams = await exams.find({}); //passed empty object returns all member of the set
  res.status(200).json(allExams);
});

//
/**@desc gets exams of the corresponding patians by ID.
*/
getExamsOfPatient = asyncHandler( async (req, res) =>
{
  const examsOfPatient = await exams.find({patientId: req.params.patientId});

  if (!examsOfPatient) //error handeling
  {
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(examsOfPatient);
});

/**@desc gets an exam from a patient using a provided ID and index.
*/
getExamByID = asyncHandler( async (req, res) =>
{
  const exam = await exams.find({_id: req.params["id"]});

  if (!exam) //error handeling
  {
    res.status(400);
    throw new Error("Exam not found"); //throws error and breaks away from function
  }

  res.status(200).json(exam);
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
  console.log(req.params);
  const exam = await exams.find({ _id: req.params["id"], patientId: req.params["patientId"] }); //finding the exam:
  if (!exam) //checking if exam was obtained
  {
    res.status(400);
    throw new Error("Patient was not found");
  }
  const updatedExam = await exams.findByIdAndUpdate(req.params["id"], req.body, {new: true});

  res.status(200).json(updatedExam);
});

/**@desc deletes an exam from a patient using a provided ID and index
*/
deleteExam = asyncHandler( async (req, res) =>
{
  //find exam before attempting to delete
  const exam = await exams.findById(req.params["id"]);
  if (!exam)
  {
    rest.status(400);
    throw new Error("Patient not found");
  }

  await exams.findOneAndDelete({_id: req.params.id}); //Did work

  res.status(200).json({_id: req.params["id"]}); //just return the id back
});

module.exports = {
  
  getExams,
  getExamsOfPatient,
  getExamByID,
  createExam,
  updateExam,
  deleteExam,
};