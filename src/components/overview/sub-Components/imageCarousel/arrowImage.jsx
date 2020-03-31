import React from 'react';
import './arrowImageStyle.css';

function DirectionalButton({ arrowDirection, icon, onImageArrowClick }) {
  return (
    <div className="column is-narrow is-vertical-centered arrowStyle">
      <button
        onClick={() => {
          onImageArrowClick(arrowDirection);
        }}
        className="button is-small"
      >
        <i className={icon}></i>
      </button>
    </div>
  );
}

export default DirectionalButton;
