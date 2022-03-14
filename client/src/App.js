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
<<<<<<< HEAD
import { ItemInsert, Items, ItemUpdate, PatientsList, Admin, Update } from './pages';
=======
import { ItemInsert, Items, ItemUpdate, PatientsList, Admin, CreateExam, EditExam } from './pages';
>>>>>>> aa00575ee206b5033f43f22282ffb6be6a9e88e8

class App extends Component {
  render() {
    // TODO: maybe only need one route for Items?
    const publicViews = (
      <Switch>
        <Route exact path={routes.HOME}>
          <Redirect to={routes.ITEMS} />
        </Route>
        <Route exact path={routes.ITEM_UPDATE} component={ItemUpdate} />
        <Route exact path={routes.ITEMS} component={Welcome} />
        <Route exact path={routes.ITEMS} component={Items} />
        <Route exact path={`${routes.ITEMS}/items-plain`} component={Items} />
        <Route exact path={`${routes.ITEMS}/react-table-v6`} component={Items} />
        <Route exact path={routes.ITEM_INSERT} component={ItemInsert} />

        <Route exact path={routes.ADMIN} component={Admin}/>
<<<<<<< HEAD
        <Route exact path={routes.UPDATE} component={Update}/>
=======
        <Route exact path={routes.CREATE_EXAM} component={CreateExam}/>
        <Route path={routes.EDIT_EXAM} component={EditExam}/>

>>>>>>> aa00575ee206b5033f43f22282ffb6be6a9e88e8
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
