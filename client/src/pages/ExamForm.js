import React, { Component, useEffect, useState } from "react";
import { FormControl, TextField, Button, InputLabel } from "@material-ui/core";
import api from '../api';


function ExamForm({ exam }) {
    const [patientId, setPatientId] = useState(exam.patientId)
    const [daysToImgStudy, setDaysToImgStudy] = useState(exam.daysToImgStudy)
    const [hoursToImgStudy, setHoursToImgStudy] = useState(exam.hoursToImgStudy)
    const [imgDescription, setImgDescription] = useState(exam.imgDescription)
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

    // Update form values
    useEffect(() => {
        api.getExamByID(exam.id)
            .then(res => {
                const exam_data = res.data[0]
                setPatientId(exam_data.patientId)
                setExamId(exam_data.examId)
                setDaysToImgStudy(exam_data.daysToImgStudy)
                setHoursToImgStudy(exam_data.hoursToImgStudy)
                setImgDescription(exam_data.imgDescription)
                setStudyModality(exam_data.studyModality)
                setOxygenAtImgStudy(exam_data.oxygenAtImgStudy)
                setKeyFindings(exam_data.keyFindings)
                setPngFilename(exam_data.pngFilename)
            })
            .catch(err => console.log(err))
    }, [exam])
    // Prevent labels from overlapping with input when exams load: InputLabelProps={{ shrink: patientId ? true : false }}
    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                
                <TextField InputLabelProps={{ shrink: patientId ? true : false }} value={patientId} defaultValue={exam.patientId}
                    onChange={e => setPatientId(e.target.value)} variant="outlined" name="patientId" label="Patient ID" />
                
                <TextField InputLabelProps={{ shrink: examId ? true : false }} value={examId} defaultValue={exam.examId}
                    onChange={e => setExamId(e.target.value)} variant="outlined" name="examId" label="Exam ID" />
                
                <TextField InputLabelProps={{ shrink: daysToImgStudy ? true : false }} value={daysToImgStudy} type="number" defaultValue={exam.daysToImgStudy}
                    onChange={e => setDaysToImgStudy(e.target.value)} variant="outlined" name="daysToImgStudy" label="Days To Image Study" />
                
                <TextField InputLabelProps={{ shrink: hoursToImgStudy ? true : false }} value={hoursToImgStudy} type="number" defaultValue={exam.hoursToImgStudy}
                    onChange={e => setHoursToImgStudy(e.target.value)} variant="outlined" name="hoursToImgStudy" label="Hours To Image Study" />
                
                <TextField InputLabelProps={{ shrink: imgDescription ? true : false }} value={imgDescription} defaultValue={exam.imgDescription}
                    onChange={e => setImgDescription(e.target.value)} variant="outlined" name="imgDescription" label="Image Description" />
                
                <TextField InputLabelProps={{ shrink: studyModality ? true : false }} value={studyModality} defaultValue={exam.studyModality}
                    onChange={e => setStudyModality(e.target.value)} variant="outlined" name="studyModality" label="Study Modality" />
                
                <TextField InputLabelProps={{ shrink: oxygenAtImgStudy ? true : false }} value={oxygenAtImgStudy} type="number" defaultValue={exam.oxygenAtImgStudy}
                    onChange={e => setOxygenAtImgStudy(e.target.value)} variant="outlined" name="oxygenAtImgStudy" label="Oxygen at Time of Study" />
                
                <TextField InputLabelProps={{ shrink: keyFindings ? true : false }} value={keyFindings} defaultValue={exam.keyFindings}
                    onChange={e => setKeyFindings(e.target.value)} variant="outlined" name="keyFindings" label="Key Findings" />
                
                <TextField InputLabelProps={{ shrink: pngFilename ? true : false }} value={pngFilename} defaultValue={exam.pngFilename}
                    onChange={e => setPngFilename(e.target.value)} variant="outlined" name="pngFilename" label="Image" />
                <Button variant="contained" color="primary" type="submit">Submit Exam</Button>
            </FormControl>
        </form>

    )
}

export default ExamForm