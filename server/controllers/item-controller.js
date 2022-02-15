/* eslint-disable no-undef, arrow-body-style */
//const Item = require('../models/item-model'); //from the template, deprecated
const patients = require("../models/patient-model.js");
const images = require("../models/exam-model.js");
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

//CONTROLLERS for the images:

/**@desc gets all the images
*/
getImages = asyncHandler( async (req, res) => {
  const allImages = await images.find({}); //passed empty object returns all member of the set
  res.status(200).json(allImages);
});

//
/**@desc gets images of the corresponding patians by ID.
*/
getImagesByID = asyncHandler( async (req, res) =>
{
  const imageOfPatient = await images.find({patientID: req.params["id"]});

  if (!imageOfPatient) //error handeling
  {
    res.status(400);
    throw new Error("Image not found"); //throws error and breaks away from function
  }

  res.status(200).json(imageOfPatient);
});

/**@desc gets an image from a patient using a provided ID and index.
*/
getImageByIndex = asyncHandler( async (req, res) =>
{
  res.status(400).json( {message: "getImageByIndex called successfully"} );
});

/**@desc creates a new image for a given patient by ID
*/
createImage = asyncHandler( async (req, res) =>
{
  const body = req.body;
  if (!body) //exception hadeling for body
  {
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newImage = await images.create(body);

  res.status(200).json(newImage);
});

/**@desc updates an image from a patient using a provided ID and index
*/
updateImage = asyncHandler( async (req, res) =>
{
  res.status(200).json( {message: "updateImage called successfully"} );
});

/**@desc deletes an image from a patient using a provided ID and index
*/
deleteImage = asyncHandler( async (req, res) =>
{
  res.status(200).json( {message: "deleteImage called successfully"} );
});

module.exports = {
  getPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
  getImages,
  getImagesByID,
  getImageByIndex,
  createImage,
  updateImage,
  deleteImage,
};
