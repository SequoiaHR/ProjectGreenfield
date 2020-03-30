import React from 'react';
import './arrowImageStyle.css';

function DirectionalButton({ arrowDirection, icon, onImageArrowClick }) {
  return (
    <div className="column is-narrow is-vertical-centered arrowStyle">
      <button
        onClick={() => {
          onImageArrowClick(arrowDirection);
        }}
        class="button is-small"
      >
        <i class={icon}></i>
      </button>
    </div>
  );
}

export default DirectionalButton;
