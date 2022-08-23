import React from 'react';
import Uniqid from 'uniqid';

function Collapse(props) {
  const collapseId = props.id ? props.id : Uniqid();
  console.log(props.id);

  const handleOnClick = () => {
    const sectionBody = document.querySelector(`#${collapseId}`);
    sectionBody.classList.toggle('collapse');
  };

  return (
    <div className="collapse-container">
      <div className={props.headerClass}>
        {props.header}
        <img src={props.downArrowImagePath} onClick={handleOnClick} />
      </div>
      <div className={props.bodyClass} id={collapseId}>
        {props.children}
      </div>
    </div>
  );
}

export default Collapse;
