import React from 'react';
import './carouselStyling.css';

function ArrowNav({ arrowDirection, icon, onNavArrowClick }) {
  let arrowStyle;
  if (arrowDirection === 'left') {
    arrowStyle = 'prevArrowNav';
  } else if (arrowDirection === 'right') {
    arrowStyle = 'nextArrowNav';
  }
  return (
    <div
      onClick={() => {
        onNavArrowClick(arrowDirection);
      }}
      className={arrowStyle}
    >
      <i className={icon}></i>
    </div>
  );
}

export default ArrowNav;
