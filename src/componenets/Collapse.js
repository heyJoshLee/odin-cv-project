import React from 'react';

function Collapse(props) {
  const handleOnClick = () => {
    const sectionBody = document.querySelector(`#${props.collapseId}`);
    sectionBody.classList.toggle('collapse');
  };

  return (
    <div className="collapse-container">
      <div className={props.headerClass}>
        {props.header}
        <img src={props.downArrowImagePath} onClick={handleOnClick} />
      </div>
      <div className={props.bodyClass} id={props.collapseId}>
        {props.children}
      </div>
    </div>
  );
}

export default Collapse;
