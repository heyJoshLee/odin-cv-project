/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div id="display">
        <div className="left-pane">
          <div className="description">
            <h2>Description</h2>
          </div>
          <div className="experience">
            <h2>Experience</h2>
          </div>
          <div className="education">
            <h2>Education</h2>
          </div>
        </div>
        <div className="right-pane">
          <div className="picture">
            <img src="#" />
          </div>
          <div className="personal-details">
            <h3>Personal Details</h3>
            <p className="address" />
            <p className="address" />
            <p className="email" />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
