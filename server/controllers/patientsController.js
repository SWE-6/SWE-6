const patients = require("../models/patient-model.js");

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

module.exports = {
    getPatients,
    getPatientByID,
    createPatient,
    updatePatient,
    deletePatient,
    
  };