import React from 'react';
import { useSelector } from 'react-redux';

function DisplayPersonalDetails() {
  const generalInformation = useSelector((state) => state.general);

  return (
    <div className="personal-details">
      <h3>Personal Details</h3>
      <div className="first-and-last-name">
        {`${generalInformation.firstName} ${generalInformation.lastName}`}
      </div>
      <div className="address">
        {generalInformation.address}
      </div>
      <div className="phone-number">
        {generalInformation.phoneNumber}
      </div>
      <div className="email">
        {generalInformation.email}
      </div>

    </div>
  );
}

export default DisplayPersonalDetails;
