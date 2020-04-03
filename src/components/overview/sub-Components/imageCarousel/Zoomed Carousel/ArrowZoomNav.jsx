import React from 'react';
import './zoomCarouselStyling.css';

function ArrowZoomNav({ arrowDirection, icon, onModalNavArrowClick }) {
  let arrowStyle;
  if (arrowDirection === 'left') {
    arrowStyle = 'prevArrowNav';
  } else if (arrowDirection === 'right') {
    arrowStyle = 'nextArrowNav';
  }
  return (
    <div
      onClick={() => {
        onModalNavArrowClick(arrowDirection);
      }}
      className={arrowStyle}
    >
      <i className={icon}></i>
    </div>
  );
}

export default ArrowZoomNav;
