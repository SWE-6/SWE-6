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
//NOTE:requiring express-async-handeler for eassy error handeling of async functions
const asyncHandler = require("express-async-handler");

//CONTROLLERS for patients

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

/**@desc creates a new patient
*/
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

/**@desc updates a specific patient
*/
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

/**@desc deletes a specific patient
*/
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
});

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
    res.status(400);
    throw new Error("Patient not found");
  }

  await exams.findOneAndDelete({_id: req.params.id}); //Did work

  res.status(200).json({_id: req.params["id"]}); //just return the id back
});

//other controllers (unification of the two databases)

/**@dec returns an array of a combination fo data between patients and their last exam as general information
*/
getGenInfo = asyncHandler( async (req, res) =>
{
  let infos = new Array();
  //let patientExams;
  const allPatients = await patients.find({});

  if (allPatients)
  {
    for (let i = 0; i < allPatients.length; ++i)
    {
      let patientExams = await exams.find({patientId: allPatients[i]._id});
      if (patientExams)
      {
        let lastExam = patientExams.length-1;
        let image = (patientExams.length > 0)? patientExams[lastExam].pngFilename : "NULL";
        let tempExamId = (patientExams.length > 0)? patientExams[lastExam]._id : "NULL";
        let tempKeyFindings = (patientExams.length > 0)? patientExams[lastExam].keyFindings : "NULL";

        let tempInfo =
        {
          id: allPatients[i]._id,
          examId: tempExamId,
          pngFilename: image,
          keyFindings: tempKeyFindings,
          age: allPatients[i].age,
          sex: allPatients[i].sex,
          bmi: allPatients[i].bmi,
          zip: allPatients[i].zip
        };

        infos.push(tempInfo);
      }
      else
      {
        res.status(400);
        throw new Erro("Failure at getGenInfo\nCouldn't get any exams for patient " + patient._id);
      }
    }

    res.status(200).json(infos);
  }
  else
  {
    res.status(400);
    throw new Error("Failure at getGenInfo\nCouldn't get any patients");
  }
});

module.exports = {
  getPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
  getExams,
  getExamsOfPatient,
  getExamByID,
  createExam,
  updateExam,
  deleteExam,
  getGenInfo
};
