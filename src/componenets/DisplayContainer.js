/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import DisplayEducationlDetails from './DisplayEducationDetails';
import DisplayExperiencelDetails from './DisplayExperienceDetails';
import DisplayPersonalDetails from './DisplayPersonalDetails';

function DisplayContainer() {
  const generalInformation = useSelector((state) => state.general);
  return (
    <div id="display-container">
      <h2>{`${generalInformation.firstName} ${generalInformation.lastName}`}</h2>
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

export default DisplayContainer;
