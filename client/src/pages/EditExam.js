import React, { useEffect, useState } from "react";
import ExamForm from "./ExamForm";
import apis from "../api";
import { useParams } from "react-router-dom";


function EditExam() {
    const [exam, setExam] = useState({})
    const props = useParams()
    console.log(props)
    useEffect(() => {
        apis.getExamByID(props.id).then(res => {
            const exam_response = res.data[0]
            // Not sure why this isn't triggering a reload since the state is being update
            setExam(exam_response)
            console.log(exam_response)
            console.log(`EXAM:`)
            // Object is empty so setExam isn't updating the state?
            console.log(exam)
        })
            .catch(err => console.error('Error in EditExam: ', JSON.stringify(err)))
    }, [props.id])
    // const fetchExam = examId => {
    //     apis.getExamByID(examId)
    //         .then(res => {
    //             return setExam(res)
    //         })
    //         .catch(err => console.error('Error in EditExam: ', JSON.stringify(err)))
    // }
    // fetchExam(props.id)
    return (
        <ExamForm exam={exam}></ExamForm>
    )
}

export default EditExam