import React, { Component } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

import MaUTable from '@material-ui/core/Table';
import { CssBaseline, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import styled, { ThemeConsumer } from 'styled-components';

class PatientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      exams: [],

    }
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getExams().then(exams => {
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
    // patients table
    return (
      <div>
        <table class="styled-table">

          <tr>
            <th>Patient ID</th>
            <th>Exam ID</th>
            <th>Image</th>
          </tr>
          <td>
            {exams.map((exam) => (
              <tr key={exam.patientId}><a href={`/patient/${exam.patientId}`}>{exam.patientId}</a></tr>
            ))}
          </td>
          <td>
            {exams.map((exam) => (
              <tr key={exam.examId}><a href={`/exam/${exam.patientId}`}>{exam.examId}</a></tr>
            ))}
          </td>

          <td>
            {exams.map((exam) => (
              <tr key={exam.pngFilename}><img img src={exam.pngFilename}></img></tr>
            ))}
          </td>
        </table>
      </div>
    )
  }
}
export default PatientsList;

