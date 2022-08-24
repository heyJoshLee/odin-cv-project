import React from 'react';
import { useSelector } from 'react-redux';

function DisplayEducationlDetails() {
  const educationItems = useSelector((state) => state.education);

  const renderEducationItems = () => educationItems.map((educationItem) => (
    <div className="education-item print-heading-section">
      <div className="university-name-and-city-container">
        <div className="univerity-name">{`${educationItem.universityName}, `}</div>
        <div className="city">{educationItem.city}</div>
      </div>
      <div className="degree">{educationItem.degree}</div>
      <div className="date-container">
        {`${educationItem.fromDate} - ${educationItem.toDate}`}
      </div>
    </div>

  ));

  return (
    <div className="education-details">
      <h3>Education</h3>
      {renderEducationItems()}
    </div>
  );
}

export default DisplayEducationlDetails;
