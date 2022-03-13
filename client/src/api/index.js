/**
* 02 21 2022
*
* API application for front end RACT app
**/

import https from 'https';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  hostname: process.env.REEACT_APP_API_HOST || 'http://localhost:3000/',
  httpsAgent: https.Agent({
    rejectUnauthorized: false,
  }),
});

//FIXME: From template. These functions have no practical use, must be deleted once pages are made
export const getAllItems = payload => api.get(`/items`, payload);
export const getItemById = id => api.get(`/item/${id}`);
export const insertItem = payload => api.post(`/item`, payload);
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemById = id => api.delete(`/item/${id}`);

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling
/**@desc API to GET all the patients of the database
*/
const getPatients = (payload) => api.get("/patients", payload);


/**@param id the given ID used to search for patient
* @desc API to GET a single patient using ID. Handle promise when called
*/
const getPatientByID = (id) => api.get("/patients/" + id);
/*{
  api.get(`/patients/${id}`).then(
    (r) =>
    {
      let patient = r.data;
      console.log(patient);
      return patient;
    } //r stands for response
  ).catch(
    (e) => { console.log(e); }
  );
};*/

/**@param payload patient as json object to send to the DB
* @desc Insert a new patient to the database
*/
const insertPatient = (payload) =>
{
  try
  {
    api.post("/patients", payload);
  }
  catch (e)
  {
    console.error(e);
  }
};

/**@param id The ID of the patient to be updated
* @param payload The json object that holds the fields and the data for the patient to be updated with
* @desc Updates a patient of the given ID
*/
const updatePatient = (id, payload) =>
{
  try
  {
    api.put("/patients/"+id, payload);
  }
  catch (e)
  {
    console.error(e);
  }
};

/**@param id The ID of the patient to be deleted
* @desc deletes a patient of the given ID
*/
const deletePatient = (id) =>
{
  try
  {
    api.delete("/patients/"+id);
  }
  catch (e)
  {
    console.error(e);
  }
};

/**@desc API to GET all the exams of the database. Handle promise when called
*/
const getExams = (payload) => api.get("/exams", payload);
/*{
  api.get("/exams", payload).then(res => {
    let exams = res.data
    console.log(exams)
    return exams
  }).catch(e => {
    console.error(e)
  })
};*/

/**@param id The ID of the patient
* @desc returns an array of exams that belong to the patient of the given ID
*/
const getExamsOfPatient = (id) => api.get("/patients/" + id + "/exams/");
/*{
  api.get("/patients/" + id + "/exams/").then(
    (res) =>
    {
      let exams = res.data;
      console.log(exams);
      return exams;
    }
  ).catch(
    (e) => { console.error(e); }
  );
};*/

/**@param id The ID of the exam to be updated
* @desc returns the exam of the given ID. Handle promise when called
*/
const getExamByID = (id) => api.get("/exams/" + id);
/*{
  api.get("/exams/"+id).then(
    (res) =>
    {
      let exam = res.data;
      console.log(exam);
      return exam;
    }
  ).catch(
    (e) => { console.error(e); }
  );
};*/

/**@param payload The object of the new exam to be inserted
* @desc inserts a new exam to the database
*/
const insertExam = (payload) => api.post("/exams/", payload)

/**@param id The ID of the exam to be updated
* @param payload The json object that holds the fields and the data for the exam to be updated with
* @desc Updates a exam of the given ID
*/
const updateExam = (id, payload) =>
{
  try
  {
    api.put("/exams/"+id, payload);
  }
  catch (e)
  {
    console.error(e);
  }
};

/**@param id The ID of the exam to be deleted
* @desc dletes a specific exam from the database
*/
const deleteExam = (id) =>
{
  try
  {
    api.delete("/exams/"+id);
  }
  catch (e)
  {
    console.error(e);
  }
};

const getGeneralInfo = (payload) => api.get("/geninfo");
/*{
  const lambResolve = (res) => {
    let info = res.data;
    console.log(info);
    return info;
  };
  const lambErrorHandler = (e) => console.error(e);
  api.get("/geninfo").then(lambResolve).catch(lambErrorHandler);
}*/

const apis = {
  getAllItems,
  getItemById,
  insertItem,
  updateItemById,
  deleteItemById,
  //API for patients
  getPatients,
  getPatientByID,
  insertPatient,
  updatePatient,
  deletePatient,
  //API for exams
  getExams,
  getExamsOfPatient,
  getExamByID,
  insertExam,
  updateExam,
  deleteExam,
  //other API
  getGeneralInfo
};

export default apis;
