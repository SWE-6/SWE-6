/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
const examRouter = require('./routes/exams-router');
const patientRouter = require('./routes/patients-router');
const geninfoRouter= require('./routes/geninfo-router')
const app = express();
const apiPort = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api',examRouter);
app.use('/api',patientRouter);
app.use('/api',geninfoRouter);

app.listen(apiPort, () => {
    console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`)
})

