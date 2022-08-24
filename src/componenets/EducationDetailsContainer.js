/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEducationInformation } from '../features/crud/education/educationSlice';
import Collapse from './Collapse';
import EducationDetails from './EducationDetails';

function PersonalDetails() {
  const educationItems = useSelector((state) => state.education);

  const dispatch = useDispatch();

  const addNewEducation = () => {
    const newItemArray = [...educationItems, {
      itemID: educationItems.length,
    }];
    dispatch(setEducationInformation(newItemArray));
  };

  const renderEducationItems = () => educationItems.map((educationItem) => <EducationDetails initialData={educationItem} />);

  return (
    <Collapse
      key="someting"
      header="Education Details"
      collapseId="education-details"
      headerClass="edit-section-title"
      bodyClass="edit-section-body"
      downArrowImagePath={require('../assets/arrow-down.png')}
    >
      {renderEducationItems()}
      <button onClick={addNewEducation}>Add New</button>
    </Collapse>

  );
}

export default PersonalDetails;
