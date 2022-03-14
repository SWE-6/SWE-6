import React, { useState } from "react";
import ExamForm from "./ExamForm";
import PatientForm from "./PatientForm";
import { Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";


function EditExam() {
    const props = useParams()
    // id used to populate ExamForm
    const [exam, setExam] = useState({ id: props.examId })
    const [patient, setPatient] = useState({ id: props.patientId })
    return (
        <Grid container justifyContent={"center"} rowSpacing={2} columnSpacing={2}>
            <Grid itex xs={4}>
                <PatientForm patient={patient} />
            </Grid>
            <Grid item xs={4}>
                <ExamForm exam={exam} />
            </Grid>
        </Grid>
    )
}

export default EditExam
