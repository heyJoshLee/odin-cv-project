/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setExperienceInformation } from '../features/crud/experience/experienceSlice';
import Collapse from './Collapse';
import ExperienceDetails from './ExperienceDetails';

function ExperienceDetailsContainer() {
  const experienceItems = useSelector((state) => state.experience);
  console.log(experienceItems);
  const dispatch = useDispatch();

  const addNewexperience = () => {
    const newItemArray = [...experienceItems, {
      itemID: experienceItems.length,
    }];
    dispatch(setExperienceInformation(newItemArray));
  };

  const renderExperienceItems = () => experienceItems.map((experienceItem) => <ExperienceDetails initialData={experienceItem} />);

  return (
    <Collapse
      key="experience-details"
      header="Experience Details"
      collapseId="experience-details"
      headerClass="edit-section-title"
      bodyClass="edit-section-body"
      downArrowImagePath={require('../assets/arrow-down.png')}
    >
      {renderExperienceItems()}
      <button onClick={addNewexperience}>Add New</button>
    </Collapse>

  );
}

export default ExperienceDetailsContainer;
