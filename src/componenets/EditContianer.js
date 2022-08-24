import React from 'react';
import PersonalDetails from './PersonalDetails';
import EducationDetailsContainer from './EducationDetailsContainer';
import ExperienceDetailsContainer from './ExperienceDetailsContainer';

function EditContainer() {
  return (
    <div>
      <PersonalDetails />
      <EducationDetailsContainer />
      <ExperienceDetailsContainer />
    </div>
  );
}

export default EditContainer;
