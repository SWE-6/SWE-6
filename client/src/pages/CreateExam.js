import { Grid } from "@material-ui/core";
import React, { Component, useState } from "react";
import ExamForm from "./ExamForm";
import PatientForm from "./PatientForm";


function CreateExam() {
    const exam = {
        patientId: "",
        daysToImgStudy: "",
        hoursToImgStudy: "",
        imgDescription: "",
        studyModality: "",
        oxygenAtImgStudy: "",
        keyFindings: "",
        pngFilename: "",
        examId: ""
    }
    const patient = {
        age: "",
        sex: "",
        race: "",
        zip: "",
        bmi: "",
        weight: "",
        height: "",
        numOfIcuAdmits: "",
        mortality: ""
    }

    return (
        <Grid container>
            <Grid itex xs={6}>
                <PatientForm patient={patient} />
            </Grid>
            <Grid item xs={6}>
                <ExamForm exam={exam} />
            </Grid>
        </Grid>
    )
}

export default CreateExam