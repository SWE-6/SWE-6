import React, { Component, useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import api from '../api';


function ExamForm({ exam }) {
    const [patientId, setPatientId] = useState(exam.patientId)
    const [daysToImgStudy, setDaysToImgStudy] = useState(exam.daysToImgStudy)
    const [hoursToImgStudy, setHoursToImgStudy] = useState(exam.hoursToImgStudy)
    const [imgDescription, setImgDescripttion] = useState(exam.imgDescription)
    const [studyModality, setStudyModality] = useState(exam.studyModality)
    const [oxygenAtImgStudy, setOxygenAtImgStudy] = useState(exam.oxygenAtImgStudy)
    const [keyFindings, setKeyFindings] = useState(exam.keyFindings)
    const [pngFilename, setPngFilename] = useState(exam.pngFilename)
    const [examId, setExamId] = useState(exam.examId)

    const handleSubmit = e => {
        const exam = {
            patientId: patientId,
            daysToImgStudy: daysToImgStudy,
            hoursToImgStudy: hoursToImgStudy,
            imgDescription: imgDescription,
            studyModality: studyModality,
            oxygenAtImgStudy: oxygenAtImgStudy,
            keyFindings: keyFindings,
            pngFilename: pngFilename,
            examId: examId
        }
        api.insertExam(exam)
            .then(res => {
                console.log(res)
                alert(res)
            })
            .catch(err => console.error("Error in ExamForm: ", err))
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <TextField defaultValue={exam.patientId} onChange={e => setPatientId(e.target.value)} variant="outlined" name="patientId" label="Patient ID" />
                <TextField defaultValue={exam.examId} onChange={e => setExamId(e.target.value)} variant="outlined" name="examId" label="Exam ID" />
                <TextField type="number" defaultValue={exam.daysToImgStudy} onChange={e => setDaysToImgStudy(e.target.value)} variant="outlined" name="daysToImgStudy" label="Days To Image Study" />
                <TextField type="number" defaultValue={exam.hoursToImgStudy} onChange={e => setHoursToImgStudy(e.target.value)} variant="outlined" name="hoursToImgStudy" label="Hours To Image Study" />
                <TextField defaultValue={exam.imgDescription} onChange={e => setImgDescripttion(e.target.value)} variant="outlined" name="imgDescription" label="Image Description" />
                <TextField defaultValue={exam.studyModality} onChange={e => setStudyModality(e.target.value)} variant="outlined" name="studyModality" label="Study Modality" />
                <TextField type="number" defaultValue={exam.oxygenAtImgStudy} onChange={e => setOxygenAtImgStudy(e.target.value)} variant="outlined" name="oxygenAtImgStudy" label="Oxygen Levels at " />
                <TextField defaultValue={exam.keyFindings} onChange={e => setKeyFindings(e.target.value)} variant="outlined" name="keyFindings" label="Key Findings" />
                <TextField defaultValue={exam.pngFilename} onChange={e => setPngFilename(e.target.value)} variant="outlined" name="pngFilename" label="Image" />
                <Button variant="contained" color="primary" type="submit">Submit Exam</Button>
            </FormControl>
        </form>

    )
}

export default ExamForm