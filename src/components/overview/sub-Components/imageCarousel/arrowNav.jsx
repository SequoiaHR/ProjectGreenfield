import React from 'react';
import './thumbnailImages.css';

function ArrowNav({ arrowDirection, icon, onNavArrowClick }) {
  return (
    <div className="column is-narrow is-vertical-centered arrowStyle">
      <button
        onClick={() => {
          onNavArrowClick(arrowDirection);
        }}
        class="button is-small"
      >
        <i class={icon}></i>
      </button>
    </div>
  );
}

export default ArrowNav;
