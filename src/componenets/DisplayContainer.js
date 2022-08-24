/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import DisplayEducationlDetails from './DisplayEducationDetails';
import DisplayExperiencelDetails from './DisplayExperienceDetails';
import DisplayPersonalDetails from './DisplayPersonalDetails';

class DisplayContainer extends Component {
  render() {
    return (
      <div id="display-container">
        <div className="left-pane">
          <DisplayEducationlDetails />

          <DisplayExperiencelDetails />
        </div>
        <div className="right-pane">
          <DisplayPersonalDetails />

        </div>
      </div>
    );
  }
}

export default DisplayContainer;
