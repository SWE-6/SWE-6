import React, { Component } from 'react'
import api from '../api'



class patientDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //patients array
            patients: [],
            columns: [],
            isLoading: false,
        }
    }
    //get patietns by id
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getPatientByID(this.props.match.params.id).then(patients => {
            this.setState({
                patients: [patients.data],
                isLoading: false,
            })
        })


    }
    //render the patients info 
    render() {
        const { patients, exams, isLoading } = this.state
        console.log(patients)

        return (

            <div>
                <h1>Patient Info</h1>
                <h2>Patient ID</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient._id}>{patient._id}</p>
                ))}

                <h2>age</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient.age}>{patient.age}</p>
                ))}

                <h2>sex</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient.sex}>{patient.sex}</p>
                ))}

                <h2>BMI</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient.bmi}>{patient.bmi}</p>
                ))}

                <h2>Zip Code</h2>
                {this.state.patients.map((patient) => (
                    <p key={patient.zip}>{patient.zip}</p>
                ))}
            </div>
        )
    }
}

export default patientDetails