/* eslint-disable no-undef, arrow-body-style */
//const Item = require('../models/item-model'); //from the template, deprecated
const patients = require("../models/patient-model.js");
const images = require("../models/exam-model.js");
//requiring express-async-handeler for eassy error handeling of async functions
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
  // FIXME: Continue with filtering
  /*await Item.find({patientId: req.params.patientId }, (err, items) => {
    if (err) {
      console.error(`400 in 'getPatientByID': ${err}`);
      throw res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!items.length) {
      console.error(`404 in 'getPatientByID': Item not found`);
      return res.status(404).json({
        success: false,
        error: 'Item not found',
      });
    }
    console.log(`200 in 'getPatientByID': Item fetched!`);
    return res.status(200).json({
      success: true,
      item: items[0],
    });
  }).catch(err => {
    console.error(`caught error in 'getPatientByID': ${err}`);
    console.error(err);
    return err;
  });*/

  const patient = await patients.findById(req.params.id); //finding the patient
  res.status(200).json(patient);
});

createPatient = asyncHandler( async (req, res) => {
  /*const body = req.body;
  // console.log('----------------------- createPatient: req -----------------------')
  // console.log(req);
  // console.log('----------------------- createPatient: body -----------------------')
  // console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must define a patient.',
    });
  }

  //const newPatient = new patients(body);

  const newPatient = patients.create(
    {
      patientId: req.body.patientId,
      age: req.body.age,
      sex: req.body.sex,
      race: req.body.race,
      zip: req.body.zip,
      bmi: req.body.bmi,
      weight: req.body.weight,
      height: req.body.height,
      numOfIcuAdmits: req.body.numOfIcuAdmits,
      mortality: req.body.mortality
    }
  );

  if (!newPatient) {
    console.error(`400 in 'createPatient': 'new patient' is malformed.`);
    return res.status(400).json({
      success: false,
      message: "'newPatient' is malformed",
    });
  }

  // console.log('----------------------- createPatient: item -----------------------')
  // console.log(item);

  return newPatient.save().then(() =>
  {
      console.error(`201 in 'createPatient': Item created!`);
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Patient created!',
      });
    })
    .catch(err => {
      console.error(`caught error in 'createPatient'`);
      Object.keys(err.errors).forEach(errorKey => {
        console.error(`ERROR for: ${errorKey}`);
        console.error(
          `=> ${
            ((err.errors[errorKey] || {}).properties || {}).message
          }`,
        );
      });
      return res.status(400).json({
        success: false,
        error: err.errors,
        message: err.errors.name,
      });
    });*/

  const body = req.body;
  //let newPatient = null;
  if (!body) //exception hadeling for body
  {
    res.status(400);
    throw new Error("Please, define a body");
  }
  const newPatient = await patients.create(body);

  res.status(200).json(newPatient);
});

updatePatient = asyncHandler( async (req, res) => {
  /*const body = req.body;
  if (!body) {
    console.error(`400 in 'updatePatient': You must provide an item to update.`);
    return res.status(400).json({
      success: false,
      error: 'You must provide an item to update.',
    });
  }

  const itemForUpdate = {
    _id: req.params.id,
    name: body.name,
    daysOfWeek: body.daysOfWeek,
    timeframeNote: body.timeframeNote,
    priority: body.priority,
    content: body.content,
  };

  // console.log('----------------------- updatePatient: res -----------------------');
  // console.log(res);

  try {
    await Item.findOneAndUpdate({ _id: req.params.id }, itemForUpdate);
  } catch (err) {
    console.error(`caught error in 'updatePatient': ${err}`);
    console.error(err);
    return res.status(400).json({
      success: false,
      error: err,
    });
  }

  console.log(`200 in 'updatePatient': Item updated!`);
  return res.status(200).json({
    success: true,
    id: req.params.id,
    message: 'Item updated!',
  });*/

  //finding the patient:
  const patient = await patients.findById(req.params.id);
  if (!patient) //checking if patient was obtained
  {
    res.status(400);
    throw new Error("Pationt was not found");
  }
  const updatedPatient = await patients.findByIdAndUpdate(req.params.id, req.body, {new: true,}); //updating patient with ID using given body

  res.status(200).json(updatedPatient);
});

deletePatient = asyncHandler( async (req, res) => {
  /*await Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) {
      console.error(`400 in 'deleteItem': ${err}`);
      return res.status(400).json({
        succes: false,
        error: err,
      });
    }

    if (!item) {
      console.error(`400 in 'deleteItem': Item not found!`);
      return res.status(400).json({
        success: false,
        error: 'Item not found!',
      });
    }

    return res.status(200).json({
      success: true,
      item: item,
    });
  }).catch(err => {
    console.error(`caught error in 'deleteItem': ${err}`);
    console.error(err);
    return err;
  });*/
  const patient = await patients.findById(req.params.id);
  let deletedPatient = null;
  if (!patient)
  {
    rest.status(400);
    throw new Error("Patient not found");
  }
  patients.remove();

  res.status(200).json({id: req.params.id}); //just return the id back
});

/**@desc gets all the images
*/
getImages = asyncHandler( async (req, res) =>
{
  /*await Item.find({}, (err, items) => {
    if (err) {
      console.error(`400 in 'getImages': ${err}`);
      return res.status(400).json({
        success: false,
        error: err,
      });
    }
    if (!items.length) {
      console.error(`404 in 'getImages': Items not found`);
      return res.status(200).json({
        success: true,
        items: [],
      });
    }
    console.log(`200 in 'getImages': Items fetched!`);
    return res.status(200).json({
      success: true,
      items: items,
    });
  }).catch(err => {
    console.error(`caught error in 'getImages': ${err}`);
    console.error(err);
    return res.status(404).json({
      success: false,
      error: err,
    });
  });*/
  //res.status(400).json( {message: "getImage called successfully"} );
});

/**@desc gets images of the corresponding patians by ID.
*/
getImagesByID = asyncHandler( async (req, res) =>
{
  res.status(400).json( {message: "getImagesByID called successfully"} );
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
  res.status(400).json( {message: "getImageByIndex called successfully"} );
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
