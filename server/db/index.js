const mongoose = require('mongoose');

//to connect to the mongo atlas DB
const MONGO_URI = "mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb"
// const LOCAL_URI = "mongodb://127.0.0.1:27017/"

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: true })
  .catch(e => {
    console.error("Error trying to connect to Mongo Atlas DB", e.message);
  });

const db = mongoose.connection;

module.exports = db;
