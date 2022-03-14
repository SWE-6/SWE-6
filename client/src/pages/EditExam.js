import React, { useState } from "react";
import ExamForm from "./ExamForm";
import apis from "../api";
import { useParams } from "react-router-dom";


function EditExam() {
    const props = useParams()
    // id used to populate ExamForm
    const [exam, setExam] = useState({ id: props.id })
    return (
        <ExamForm exam={exam}></ExamForm>
    )
}

export default EditExam