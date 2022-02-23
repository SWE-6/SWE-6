import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import { routes } from '../constants';

import { Button } from '@material-ui/core';
import styled from 'styled-components';

import { ItemsList, ItemsPlain, ItemsTable } from '../pages';

//FIXME: importing apis to test getting a patient on this page
import apis from "../api";

const LinksGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr [col-start]);
  margin-bottom: 1em;
  min-height: 30px;
  padding: 1em;
  width: 100%;
`;

const LinkGridWrapper = styled.div``;

const isCurrentPage = linkPathname => {
  return window.location.pathname === linkPathname;
};

const linkTextColor = linkPathname => {
  return isCurrentPage(linkPathname) ? '#FFFFFF' : 'rgba(255,255,255,.75)';
};

const itemsPageVariants = [
  {
    name: 'Items',
    toPathname: routes.ITEMS,
    pageComonent: ItemsList,
  },
  {
    name: 'Items (using react-table-v6)',
    toPathname: `${routes.ITEMS}/react-table-v6`,
    pageComponent: ItemsTable,
  },
  {
    name: 'Items (with only styled-components)',
    toPathname: `${routes.ITEMS}/items-plain`,
    pageComponent: ItemsPlain,
  },
];

class Items extends Component {

  render() {
    // TODO: would be better to dynamically create the routes based on page variations
    const itemsPages = (
      <Switch>
        <Route exact path={routes.ITEMS} component={ItemsList} />
        <Route exact path={`${routes.ITEMS}/react-table-v6`} component={ItemsTable} />
        <Route exact path={`${routes.ITEMS}/items-plain`} component={ItemsPlain} />
      </Switch>
    );

    //FIXME: Just for testing the api, delete this.
    //apis.getPatientByID("COVID-19-AR-16434381"); //obtain patient by ID
    const patient2 =
    {
      "_id": "123456789",
      "age": 100,
      "sex": "P",
      "race": "Martian",
      "zip": "118631",
      "bmi": 40,
      "weight": 200,
      "height": "7",
      "numOfIcuAdmits": 128,
      "mortality": "T",
      "tuberculosis": "N",
      "measles": "N"
  }
  const examTest =
  {
    "_id": "Exam-100",
    "patientId": "COVID-19-AR-16434409",
    "daysToImgStudy": 100,
    "hoursToImgStudy": 100,
    "imgDescription": "XR CHEST AP PORTABLE",
    "studyModality": "DX",
    "keyFindings": "This patient does not exist and the image belongs to another patient",
    "pngFilename": "COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png"
    }
  //apis.getPatients() //Testing getting all patients
  //apis.insertPatient(patient2); //Testing inserting new patient, it works
  //apis.updatePatient("123456789", {sex: "I"}); //Testing updating patient
  //apis.deletePatient("123456789"); //testing deleting patient
  //apis.getExams({}); //Testing getting all Exams
  //apis.getExamsOfPatient("COVID-19-AR-16434381"); //Testing getting exams by patient
  //apis.insertExam(examTest); //Testing insert a new exam
  //apis.updateExam("Exam-100", {"hoursToImgStudy": 200}); //Testing updating an exam
  //apis.deleteExam("Exam-100"); //Testing deleting a specific exam
  //NOTE: Testing ends here

    return (
      <>
        <LinksGridContainer>
          {itemsPageVariants.map((itemsPageVariant, i) => (
            <LinkGridWrapper
              key={itemsPageVariant.name}
              style={{ gridColumn: `${(i + 2) * 2 - 1} / span 2` }}>
              <Button className="bg-dark" variant="contained">
                <Link
                  style={{ color: linkTextColor(itemsPageVariant.toPathname) }}
                  to={itemsPageVariant.toPathname}>
                  {itemsPageVariant.name}
                </Link>
              </Button>
            </LinkGridWrapper>
          ))}
        </LinksGridContainer>
        {/* {itemsPages} */}
      </>
    );
  }
}

export default Items;
