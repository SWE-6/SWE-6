import React, { Component, useEffect, useState } from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import apis from '../api';


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
        apis.insertExam(exam)
            .then(res => {
                console.log(res)
                alert("Exam Insert Successful")
            })
            .catch(err => console.error("Error in ExamForm: ", err))
        e.preventDefault()
    }

    // Update form values
    useEffect(() => {
        apis.getExamByID(exam.id)
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
    // Prevent labels from overlapping with input when exam loads: InputLabelProps={{ shrink: patientId ? true : false }}
    return (
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth={true}>
                <Button variant="contained" color="primary" type="submit">Submit Exam</Button>

                <TextField value={patientId} defaultValue={exam.patientId}
                    onChange={e => setPatientId(e.target.value)}
                    InputLabelProps={{ shrink: patientId ? true : false }}
                    name="patientId" label="Patient ID" margin="normal" variant="outlined" />

                <TextField value={examId} defaultValue={exam.examId}
                    onChange={e => setExamId(e.target.value)}
                    InputLabelProps={{ shrink: examId ? true : false }}
                    name="examId" label="Exam ID" margin="normal" variant="outlined" />

                <TextField value={daysToImgStudy} type="number" defaultValue={exam.daysToImgStudy}
                    onChange={e => setDaysToImgStudy(e.target.value)}
                    InputLabelProps={{ shrink: daysToImgStudy ? true : false }}
                    name="daysToImgStudy" label="Days To Image Study" margin="normal" variant="outlined" />

                <TextField value={hoursToImgStudy} type="number" defaultValue={exam.hoursToImgStudy}
                    onChange={e => setHoursToImgStudy(e.target.value)}
                    InputLabelProps={{ shrink: hoursToImgStudy ? true : false }}
                    name="hoursToImgStudy" label="Hours To Image Study" margin="normal" variant="outlined" />

                <TextField value={imgDescription} defaultValue={exam.imgDescription}
                    onChange={e => setImgDescription(e.target.value)}
                    InputLabelProps={{ shrink: imgDescription ? true : false }}
                    name="imgDescription" label="Image Description" margin="normal" variant="outlined" />

                <TextField value={studyModality} defaultValue={exam.studyModality}
                    onChange={e => setStudyModality(e.target.value)}
                    InputLabelProps={{ shrink: studyModality ? true : false }}
                    name="studyModality" label="Study Modality" margin="normal" variant="outlined" />

                <TextField value={oxygenAtImgStudy} defaultValue={exam.oxygenAtImgStudy}
                    onChange={e => setOxygenAtImgStudy(e.target.value)}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    InputLabelProps={{ shrink: oxygenAtImgStudy ? true : false }}
                    name="oxygenAtImgStudy" label="Oxygen at Time of Study" margin="normal" variant="outlined" />

                <TextField value={keyFindings} defaultValue={exam.keyFindings}
                    onChange={e => setKeyFindings(e.target.value)}
                    InputLabelProps={{ shrink: keyFindings ? true : false }}
                    name="keyFindings" label="Key Findings" margin="normal" variant="outlined" />

                <TextField value={pngFilename} defaultValue={exam.pngFilename}
                    onChange={e => setPngFilename(e.target.value)}
                    InputLabelProps={{ shrink: pngFilename ? true : false }}
                    name="pngFilename" label="Image URL" margin="normal" variant="outlined" />

            </FormControl>
        </form>

    )
}

export default ExamForm
