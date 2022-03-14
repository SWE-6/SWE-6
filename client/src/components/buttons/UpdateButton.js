/**
* Pedro Gutierrez Rincon
* 12-03-2022
*
* Button to send to the update page
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {routes} from "../../constants";

import styled from 'styled-components';

const Update = styled.div.attrs({
  className: 'update-btn',
})`
  color: #0000ff;
  cursor: pointer;
`;

class UpdateButton extends Component {
  constructor(props)
  {
    super(props);
    //this.state={data: {}};
  }

  render() {
    return (
      //TODO: Link to the Update page
      <Link to={routes.UPDATE} data={this.props}>
        <Update>Update</Update>
      </Link>
    );
  }
}

UpdateButton.propTypes = {
  id: PropTypes.string,
};

export default UpdateButton;
