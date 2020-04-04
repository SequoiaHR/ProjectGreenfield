import React from 'react';
import './carouselStyling.css';

function DirectionalButton({ arrowDirection, icon, onImageArrowClick }) {
  //conditional logic for the arrow styling
  let arrowStyle;
  if (arrowDirection === 'left') {
    arrowStyle = 'prevArrowImg';
  } else if (arrowDirection === 'right') {
    arrowStyle = 'nextArrowImg';
  }
  return (
    <div
      className={arrowStyle}
      onClick={() => {
        onImageArrowClick(arrowDirection);
      }}
    >
      <i className={icon}></i>
    </div>
  );
}

export default DirectionalButton;
