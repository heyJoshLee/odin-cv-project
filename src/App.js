/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';

import EditContainer from './componenets/EditContianer';
import DisplayContainer from './componenets/DisplayContainer';

function App() {
  return (
    <div className="App">
      <div className="no-print">
        <h1>Easy CV</h1>
        <EditContainer />
      </div>
      <DisplayContainer />
    </div>
  );
}

export default App;
