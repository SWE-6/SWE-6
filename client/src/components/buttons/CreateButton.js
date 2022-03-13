/**
* Pedro Gutierrez Rincon
* 12-03-2022
*
* Button to send to the Create page
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {routes} from "../../constants";
import "./style.css"

class CreateButton extends Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      //TODO: Link to the Create page
      <Link to={routes.ITEMS}>
        <div class="create-btn">Create Exam</div>
      </Link>
    );
  }
}

CreateButton.propTypes = {
  id: PropTypes.string,
};

export default CreateButton;
