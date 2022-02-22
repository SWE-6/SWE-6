/**
* 02 21 2022
*
* API application for front end RACT app
* Simple testing
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

//From template
// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling
export const getAllItems = payload => api.get(`/items`, payload);
export const getItemById = id => api.get(`/item/${id}`);
export const insertItem = payload => api.post(`/item`, payload);
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemById = id => api.delete(`/item/${id}`);

//FIXME: Testing getting a single patient, needs to implement the rest of the API functionality
/**@desc API to GET all the patients of the database
*/
const getPatients = (payload) =>
{
  return api.get("/patients", payload);
};

/**@param id the given ID used to search for patient
* @desc API to GET a single patient using ID.
*/
const getPatientByID = async (id) =>
{
  //FIXME: axios returns empty json object, don't know why.
  /*try
  {
    const patient = await api.get("/patients/"+id);

    return Promise.resolve(patient.data);
  }
  catch (e)
  {
    console.error(e);
    return Promise.reject();
  }*/
  //FIXME: retursn empty json?
  let patient = api.get("/patients/"+id).then(
    (r) =>
    {
      let info = r.data;
      return r.data;
    } //r stands for response
  ).catch(
    (e) => { console.log(e); }
  );

  return patient;

  //FIXME: returns empty json object aswell?
  /*fetch("/patients/"+id).then(
    (r) => { return r.json(); } //r stands for response
  ).catch(
    (e) => { console.error(e); }
  );*/
};

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

const apis = {
  getAllItems,
  getItemById,
  insertItem,
  updateItemById,
  deleteItemById,
  //API for patients
  getPatients,
  getPatientByID,
  insertPatient
};

export default apis;
