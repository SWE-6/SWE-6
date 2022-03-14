import { Grid } from "@material-ui/core";
import React from "react";
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
        <Grid container justifyContent={"space-evenly"}  >
            <Grid item xs={4}>
                <PatientForm patient={patient} />
            </Grid>
            <Grid item xs={4}>
                <ExamForm exam={exam} />
            </Grid>
        </Grid>
    )
}

export default CreateExam
