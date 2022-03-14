import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Constants
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import { NavBar, Welcome } from './components';

// Pages
import { Items, Admin, CreateExam, EditExam, ExamDetails, Exams, PatientID, } from './pages';
import PatientInfo from './components/admin/update/patientInfo';

class App extends Component {
  render() {
    // TODO: maybe only need one route for Items?
    const publicViews = (
      <Switch>
        <Route exact path={routes.HOME}>
          <Redirect to={routes.EXAMS} />
        </Route>
        <Route exact path={routes.HOME} component={Welcome} />
        <Route exact path={routes.HOME} component={Items} />
        <Route exact path={`${routes.HOME}/items-plain`} component={Items} />
        <Route exact path={`${routes.HOME}/react-table-v6`} component={Items} />

        <Route exact path={routes.ADMIN} component={Admin}/>
        <Route exact path={routes.CREATE_EXAM} component={CreateExam}/>
      
        <Route exact path={routes.EXAMS} component={Exams} />
        <Route exact path={routes.ITEM} component={ExamDetails} />
        <Route exact path={routes.PATIENt_EXAM} component={PatientID} />
        <Route exact path={routes.ITEM_UPDATE} component={PatientInfo} />
       
      </Switch>
    );

    return (
      <BrowserRouter>
        <CssBaseline />
        <NavBar />
        <div className="app--main">
          <div className="view-container">{publicViews}</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
