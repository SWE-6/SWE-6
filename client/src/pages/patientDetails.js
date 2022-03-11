import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class patientDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exams: [],
            patients:[],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getExamsOfPatient(this.props.match.params.id).then(exams => {
            this.setState({
                exams: exams.data,
                isLoading: false,
            })
        })

        await api.getPatientByID(this.props.match.params.id).then(patients => {
            this.setState({
                patients: [patients.data],
                isLoading: false,
            })
        })


    }

    render() {
        const { patients, exams, isLoading } = this.state
        console.log(patients)

        return (
            <div>
                    <ul>
                    {this.state.exams.map((exam) => (
                        <li key={exam._id}>{exam._id}</li>
                    ))}
                    </ul>
                    
                    <ul>
                    {this.state.patients.map((patient) => (
                        <li key={patient._id}>{patient._id}</li>
                    ))}
                    </ul>
            </div>
                    )
                }
            }

export default patientDetails