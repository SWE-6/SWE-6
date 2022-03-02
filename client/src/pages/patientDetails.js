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
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getExamsOfPatient().then(exams => {
            this.setState({
                exams: exams.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { exams, isLoading } = this.state
        console.log('TCL: patientDetails -> render -> exams ', exams)

        const columns = [
            {
                Header: 'Patient ID',
                accessor: 'patientID',
                filterable: true,
            },
            {
                Header: 'Exam ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Key Findings',
                accessor: 'keyFindings',
                filterable: true,
            },
        ]

        let showTable = true
        if (!exams.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={exams}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default patientDetails