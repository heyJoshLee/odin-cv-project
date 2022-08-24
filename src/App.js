/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import PersonalDetails from './componenets/PersonalDetails';
import EducationDetailsContainer from './componenets/EducationDetailsContainer';
import Display from './componenets/Display';

function App() {
  return (
    <div className="App">
      <PersonalDetails />
      <EducationDetailsContainer />
      <Display />
    </div>
  );
}

export default App;
