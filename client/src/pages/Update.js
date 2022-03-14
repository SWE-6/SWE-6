/**Pedro Gutierrez Rincon
* 13-03-2022
*
* React components to build the Update page
*/

import React, { Component } from "react";
import PatientInfo from "../components/admin/update/patientInfo";
import ExamInfo from "../components/admin/update/examInfo";

import buttons from "../components/buttons";

class Update extends Component
{
  render()
  {
    return (
      <>
        <PatientInfo/>
        <ExamInfo/>
      </>
    );
  }
}

export default Update;
