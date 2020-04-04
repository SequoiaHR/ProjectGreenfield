import React from 'react';
import ThumbnailCircles from './ThumbnailCircles.jsx';
import ArrowZoomNav from './ArrowZoomNav.jsx';
import './zoomCarouselStyling.css';

const ZoomNavigation = function(props) {
  let arrowLeft = <div></div>;
  let arrowRight = <div></div>;

  if (props.state.currentThumbnailRow !== 0) {
    arrowLeft = (
      <div>
        <ArrowZoomNav
          arrowDirection={'left'}
          icon={'fas fa-angle-left'}
          onModalNavArrowClick={props.onModalNavArrowClick}
        />
      </div>
    );
  }
  //Calculation to get the number of rows for my conditional logic
  let numberOfImageRows = Math.ceil(props.state.otherImagesInStyle.length / 4);

  if (props.state.currentThumbnailRow !== numberOfImageRows - 1) {
    arrowRight = (
      <div>
        <ArrowZoomNav
          arrowDirection={'right'}
          icon={'fas fa-angle-right'}
          onModalNavArrowClick={props.onModalNavArrowClick}
        />
      </div>
    );
  }

  return (
    <div className="navigationOverallBucket">
      <div className="zoomNavigationBucket">
        {arrowLeft}
        <ThumbnailCircles
          state={props.state}
          changeZoomImageOnCircleClick={props.changeZoomImageOnCircleClick}
        />
        {arrowRight}
      </div>
    </div>
  );
};

export default ZoomNavigation;
