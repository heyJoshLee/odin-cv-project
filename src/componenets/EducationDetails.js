import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editEducationItem, deleteEducationItem } from '../features/crud/education/educationSlice';

function EducationDetails(props) {
  const [formData, setFormData] = useState(props.initialData);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const keyName = e.target.name;
    const { value } = e.target;

    const newValues = {
      ...formData,
      [keyName]: value,
    };

    setFormData(newValues);

    dispatch(editEducationItem({
      formValues: newValues,
      itemID: props.initialData.itemID,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const deleteItem = () => {
    dispatch(deleteEducationItem(props.initialData.itemID));
  };

  return (
    <form onChange={handleOnChange} onSubmit={handleOnSubmit} className="add-education-form">
      <label htmlFor="university-name">University Name</label>
      <input id="university-name" name="universityName" placeholder="Harvard" value={formData.universityName} onChange={handleOnChange} />

      <label htmlFor="city">City</label>
      <input id="city" name="city" placeholder="Cambridge" value={formData.city} onChange={handleOnChange} />

      <label htmlFor="degree">Degree</label>
      <input id="degree" name="degree" placeholder="B.A. Business" value={formData.degree} onChange={handleOnChange} />

      <label htmlFor="fromDate">From Date</label>
      <input id="fromDate" name="fromDate" placeholder="Jan 2008" value={formData.fromDate} onChange={handleOnChange} />

      <label htmlFor="toDate">To Date</label>

      <input id="toDate" name="toDate" placeholder="Dec 2012" value={formData.toDate} onChange={handleOnChange} />
      <button className="delete-button" onClick={deleteItem}>Delete</button>
    </form>
  );
}

export default EducationDetails;
