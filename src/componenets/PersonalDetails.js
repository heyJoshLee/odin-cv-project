/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInformation } from '../features/crud/personal/personalSlice';
import Collapse from './Collapse';

function PersonalDetails() {
  const personalInfoFromStore = useSelector((state) => state.general);

  const [personalInfo, setPersonalInfo] = useState(personalInfoFromStore);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const keyName = e.target.name;
    let { value } = e.target;

    if (e.target.type === 'file') {
      value = URL.createObjectURL(e.target.files[0]);
    }
    const newValues = {
      ...personalInfo,
      [keyName]: value,
    };

    setPersonalInfo(newValues);
    dispatch(setPersonalInformation(newValues));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const renderForm = () => (
    <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input id="first-name" name="firstName" placeholder="John" value={personalInfo.firstName} onChange={handleOnChange} />

      <label htmlFor="last-name">Last Name</label>
      <input id="last-name" name="lastName" placeholder="Smith" value={personalInfo.lastName} onChange={handleOnChange} />

      <label htmlFor="address">Address</label>
      <input id="address" name="address" placeholder="123 Main Street, New York, NY" value={personalInfo.address} onChange={handleOnChange} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input id="phoneNumber" name="phoneNumber" placeholder="555-555-5555" value={personalInfo.phoneNumber} onChange={handleOnChange} />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" placeholder="john@gmail.com" value={personalInfo.email} onChange={handleOnChange} />

      <label htmlFor="picture">Picture</label>
      <input type="file" name="picture" onChange={handleOnChange} />

      <label htmlFor="skills">skills</label>
      <input id="skills" name="skills" placeholder="javascript, ruby, html" value={personalInfo.skills} onChange={handleOnChange} />

      <label htmlFor="Description">Description</label>
      <textarea name="description" placeholder="An experienced developer">
        {personalInfo.description}
      </textarea>

    </form>
  );

  return (
    <Collapse
      key="personal-details"
      header="Personal Details"
      collapseId="personal-details"
      headerClass="edit-section-title"
      bodyClass="edit-section-body"
      downArrowImagePath={require('../assets/arrow-down.png')}
      className="container"
    >
      {renderForm()}
    </Collapse>
  );
}

export default PersonalDetails;
