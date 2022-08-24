import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editExperienceItem, deleteExperienceItem } from '../features/crud/experience/experienceSlice';

function ExperienceDetails(props) {
  const initialFormData = {
    position: '',
    company: '',
    city: '',
    fromDate: '',
    toDate: '',
    description: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const keyName = e.target.name;
    const { value } = e.target;

    const newValues = {
      ...formData,
      [keyName]: value,
    };

    console.log(newValues);

    setFormData(newValues);

    dispatch(editExperienceItem({
      formValues: newValues,
      itemID: props.initialData.itemID,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const deleteItem = () => {
    dispatch(deleteExperienceItem(props.initialData.itemID));
  };

  return (
    <form onChange={handleOnChange} onSubmit={handleOnSubmit} className="add-Experience-form">
      <label htmlFor="position">Position</label>
      <input id="position" name="position" placeholder="Senior Javascript Developer" value={formData.position} onChange={handleOnChange} />

      <label htmlFor="company">Company</label>
      <input id="company" name="company" placeholder="Google" value={formData.company} onChange={handleOnChange} />

      <label htmlFor="city">City</label>
      <input id="city" name="city" placeholder="Cambridge" value={formData.city} onChange={handleOnChange} />

      <label htmlFor="fromDate">From Date</label>
      <input id="fromDate" name="fromDate" placeholder="Jan 2008" value={formData.fromDate} onChange={handleOnChange} />

      <label htmlFor="toDate">To Date</label>
      <input id="toDate" name="toDate" placeholder="Dec 2012" value={formData.toDate} onChange={handleOnChange} />

      <label htmlFor="descrption">Descrption</label>
      <textarea name="description" value={formData.descrption} placeholder="In this position I did..." />

      <button className="delete-button" onClick={deleteItem}>Delete</button>
    </form>
  );
}

export default ExperienceDetails;
