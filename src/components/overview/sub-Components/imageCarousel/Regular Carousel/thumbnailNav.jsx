import React from 'react';
import ThumbnailImages from './thumbnailImages';
import ArrowNav from './arrowNav';
import './carouselStyling.css';

const ThumbnailNav = function(props) {
  let arrowLeft = <div></div>;
  let arrowRight = <div></div>;

  if (props.state.currentThumbnailRow !== 0) {
    arrowLeft = (
      <div>
        <ArrowNav
          arrowDirection={'left'}
          icon={'fas fa-angle-left'}
          onNavArrowClick={props.onNavArrowClick}
        />
      </div>
    );
  }

  // Calculation to get the number of rows for my conditional logic
  let numberOfImageRows = Math.ceil(props.state.otherImagesInStyle.length / 4);

  if (props.state.currentThumbnailRow !== numberOfImageRows - 1) {
    arrowRight = (
      <div>
        <ArrowNav
          arrowDirection={'right'}
          icon={'fas fa-angle-right'}
          onNavArrowClick={props.onNavArrowClick}
        />
      </div>
    );
  }

  return (
    <div className="navigationOverallBucket">
      {arrowLeft}
      <ThumbnailImages
        state={props.state}
        changeImageOnThumbnailClick={props.changeImageOnThumbnailClick}
      />
      {arrowRight}
    </div>
  );
};

export default ThumbnailNav;
