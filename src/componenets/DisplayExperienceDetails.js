import React from 'react';
import { useSelector } from 'react-redux';

function DisplayexperiencelDetails() {
  const experienceItems = useSelector((state) => state.experience);

  const renderExperienceItems = () => experienceItems.map((experienceItem) => (
    <div>
      <div className="experience-item print-heading-section">
        <div className="university-name-and-city-container">
          <div className="univerity-name">{`${experienceItem.company}, `}</div>
          <div className="city">{experienceItem.city}</div>
        </div>
        <div className="degree">{experienceItem.position}</div>
        <div className="date-container">
          {`${experienceItem.fromDate} - ${experienceItem.toDate}`}
        </div>
      </div>
      <div className="description-area">{experienceItem.description}</div>
    </div>

  ));

  return (
    <div className="experience-details">
      <h3>Experience</h3>
      {renderExperienceItems()}
    </div>
  );
}

export default DisplayexperiencelDetails;
