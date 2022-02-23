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

//FIXME: Testing getting a patient. Must be deleted
const localGetPatientTest = (id) =>
{
  fetch("/patients/"+id).then(
    (r) => { return r.json(); } //r stands for response
  ).catch(
    (e) => { console.error(e); }
  );
};

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

    //FIXME: delete this, is just to test API GET and POST a patient
    //const patient = localGetPatientTest("COVID-19-AR-16445144");

    //const patient = {name:"Pedro",age:"27"};
    // console.log(JSON.stringify(patient)); //convert to string and print to console
    const patient = apis.getPatientByID("COVID-19-AR-16434381"); //obtain patient by ID
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
  const allPatients = apis.getPatients()
  //apis.insertPatient(patient2); //Testing inserting new patient, it works
  //Testing ends here
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
