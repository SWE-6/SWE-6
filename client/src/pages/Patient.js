/**
 * Sierra Obi
 * 03-13-2022
 * 
 * Components to display all of the information for one patient. This includes:
 * patient ID, number of exams the patient had, demographics 
 * (eg. age, sex, race, zip, bmi, weight, height) and medical conditions
 */

import React, { Component } from "react";
import PatientInfo from "../components/patient/PatientInfo";
import PatientTable from "../components/patient/PatientTable";


class Patient extends Component 
{
    render ()
    {
        return (
            <>
                <PatientInfo/>
                <PatientTable/>
            </>
        );
    }

}

export default Patient;