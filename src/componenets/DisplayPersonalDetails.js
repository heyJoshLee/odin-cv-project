import React from 'react';
import { useSelector } from 'react-redux';

function DisplayPersonalDetails() {
  const generalInformation = useSelector((state) => state.general);

  return (
    <div className="personal-details">
      <div className="uploaded-picture">
        <img src={generalInformation.picture} />
      </div>
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
      <div className="skills">
        <ul>
          {generalInformation.skills.split(', ').map((skill) => <li>{skill}</li>)}
        </ul>
      </div>

    </div>
  );
}

export default DisplayPersonalDetails;
