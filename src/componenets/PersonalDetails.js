/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInformation } from '../features/crud/personal/personalSlice';
import Collapse from './Collapse';

function PersonalDetails() {
  const initialFormState = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
  };

  const [personalInfo, setpersonalInfo] = useState(initialFormState);
  const [editing, setEditing] = useState(true);
  const dispatch = useDispatch();

  const toggleEdit = () => setEditing(!editing);

  const handleOnChange = (e) => {
    const keyName = e.target.name;
    const { value } = e.target;
    setpersonalInfo({
      ...personalInfo,
      [keyName]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(personalInfo);
    dispatch(setPersonalInformation(personalInfo));
    toggleEdit();
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

      <button>Save</button>
    </form>
  );

  const renderPersonalInformation = () => (
    <div className="grid-column-2">
      <div>First Name</div>
      <div>{personalInfo.firstName}</div>
      <div>Last Name</div>
      <div>{personalInfo.lastName}</div>
      <div>Address</div>
      <div>{personalInfo.address}</div>
      <div>Phone Number</div>
      <div>{personalInfo.phoneNumber}</div>
      <div>Email</div>
      <div>{personalInfo.email}</div>
      <button onClick={() => toggleEdit()}>Edit</button>
    </div>
  );

  if (editing) {
    return (
      <Collapse
        header="Personal Details"
        collapseId="personal-details"
        headerClass="edit-section-title"
        bodyClass="edit-section-body"
        downArrowImagePath={require('../assets/arrow-down.png')}
      >
        {renderForm()}
      </Collapse>
    );
  }

  if (!editing) {
    return (
      <div className="edit-section">
        <div className="edit-section-title">Personal Details</div>
        <div className="edit-section-body">
          {renderPersonalInformation()}
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
