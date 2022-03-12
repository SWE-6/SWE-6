/**
* Pedro Gutierrez Rincon
* 12-03-2022
*
* Button to send to the update page
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Update = styled.div.attrs({
  className: 'update-item-btn',
})`
  color: #0000ff;
  cursor: pointer;
`;

class UpdateButton extends Component {
  constructor(props)
  {
    super(props);
    this.redirectUpdatePage = this.redirectUpdatePage.bind(this);
  }

  /*confirmDeleteItem = event => {
    event.preventDefault();

    if (window.confirm(`Do you want to permanently delete this patient's records? ${this.props.id}`))
    {
         this.props.onDelete(this.props.id);
    }
  };*/

  redirectUpdatePage (event)
  {
    event.preventDefault();

    console.log("Update clicked!\nPatient to be updated: " + this.props.id + "\nExam to be updated: " + this.props.exam);
  }

  render() {
    return <Update onClick={this.redirectUpdatePage}>Update</Update>;
  }
}

UpdateButton.propTypes = {
  id: PropTypes.string,
};

export default UpdateButton;
