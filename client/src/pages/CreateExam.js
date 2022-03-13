import React, { Component, useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import ExamForm from "./ExamForm";


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

    return (
        <ExamForm exam={exam}/>
    )
}

export default CreateExam