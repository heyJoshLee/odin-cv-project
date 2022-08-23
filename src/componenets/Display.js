import React, { Component } from 'react';

class Display extends Component {

  render() {
    return (
      <div id='display'>
        <div className='left-pane'>
          <div className='description'>
            <h2>Description</h2>
          </div>
          <div className='experience'>
            <h2>Experience</h2>
          </div>
          <div className='education'>
            <h2>Education</h2>
          </div>
        </div>
        <div className='right-pane'>
          <div className='picture'>
            <img src='#' />
          </div>
          <div className='personal-details'>
            <h3>Personal Details</h3>
            <p className='address'></p>
            <p className='address'></p>
            <p className='email'></p>
          </div>
        </div>
      </div >
    )
  }
}

export default Display;