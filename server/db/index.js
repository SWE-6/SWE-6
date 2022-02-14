const mongoose = require('mongoose');

//to connect to the mongo atlas DB
const MONGO_URI = "mongodb+srv://PeGuRi:8RgX6qLO9uTFeJI@cluster0.5efdq.mongodb.net/COVIDClinical?retryWrites=true&w=majority"

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: true })
  .catch(e => {
    console.error("Error trying to connect to Mongo Atlas DB", e.message);
  });

const db = mongoose.connection;

module.exports = db;
