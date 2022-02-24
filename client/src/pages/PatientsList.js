import React, { Component } from 'react';
import api from '../api';

import MaUTable from '@material-ui/core/Table';
import { CssBaseline, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

import styled from 'styled-components';

class PatientsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    }
  };

  componentDidMount() {
    console.log(`props: ${this.props}`)
    this.fetchAllPatients()
  }

  fetchAllPatients = () => {
    api
      .getPatients()
      .then(res => {
        // console.log(res.data[0])
        this.setState({
          patients: res.data
        })
      })
      .catch(err => {
        console.log(`ERROR in fetchAllPatients: ${err}`)
        return err
      })
  }

  render() {
    // const patients = this.state.patients
    this.fetchAllPatients()
    // console.log(patients)
    return (
      <div>
        <ul>
          {this.state.patients.map((patient) => (
            <li key={patient._id}>{patient._id}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default PatientsList;
