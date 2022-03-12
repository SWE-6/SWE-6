import React, { Component } from 'react'
import api from '../api'

class patientDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //patients array
            exams: [],
            patients: [],
            columns: [],
            isLoading: false,
        }
    }
    //bug I cannot get any exam by ID

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getPatientByID(this.props.match.params.id).then(patients => {
            this.setState({
                patients: [patients.data],
                isLoading: false,
            })
        })
        await api.getExamsOfPatient(this.props.match.params.id).then(exams => {
            this.setState({
                exams: [exams.data],
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
                {this.state.exams.map((exam) => (
                    <p key={exam.patientId}>Patient ID: {exam.patientId}</p>
                ))}
                \
            </div>
        )
    }
}

export default patientDetails