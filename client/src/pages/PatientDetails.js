import React, { Component } from 'react'
import api from '../api'



class PatientDetails extends Component {
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

        await api.getPatientByID(this.props.match.params.id).then(patients => {
            this.setState({
                patients: [patients.data],
             
            })
        })
        await api.getExamsOfPatient(this.props.match.params.id).then(exams => {
          this.setState({
              exams: exams.data,
          
          })
      })
    }
    //render the patients info 
    render() {
        const { exams, patients } = this.state
        console.log(patients)
        console.log(exams);

        return (

            <div>
                <h1>Patient Details</h1>
                <h2>Patient ID</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient._id}>{patient._id}</p>
                ))}
                <h2>EXAM ID</h2>
                {this.state.exams.map((exam) => (
                    <p key={exam.hoursToImgStudy}>{exam.hoursToImgStudy}</p>
                ))}
                <h2>Number Of Exams</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient.age}>{patient.age}</p>
                ))}

              
            </div>
        )
    }
}

export default PatientDetails