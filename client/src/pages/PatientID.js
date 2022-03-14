import React, { Component } from 'react'
import api from '../api'

class PatientID extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //patients array
            patients: [],
            exams: [],
            columns: [],
       
        }
    }
    //get patietns by id
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        api.getGeneralInfo()
        .then(res => {
            console.log(res)
        })
        .catch(err => console.error("Error in ExamForm: ", err))
   
}
   
    
    //render the patients info 
    render() {
        const { exams, patients } = this.state
        console.log(patients)
        console.log(exams);

        return (

            <div>
                <h1>Patient Info</h1>
                <h2>Patient ID</h2>
         
                <h2>EXAM ID</h2>
                {this.state.exams.map((exam) => (
                    <p key={exam.hoursToImgStudy}>{exam.hoursToImgStudy}</p>
                ))}
 
            </div>
        )
    }
}

export default PatientID