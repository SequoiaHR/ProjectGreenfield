import React from 'react';
import './zoomCarouselStyling.css';
import ArrowImage from '../Regular Carousel/arrowImage';

const ZoomImage = function(props) {
  let arrowLeft = <div></div>;
  let arrowRight = <div></div>;

  //conditional logic for the arrows appearing/not appearing
  if (props.state.currentImage !== 0) {
    arrowLeft = (
      <div>
        <ArrowImage
          arrowDirection={'left'}
          icon={'fas fa-angle-left'}
          onImageArrowClick={props.onImageModalArrowClick}
        />
      </div>
    );
  }

  if (props.state.currentImage !== props.state.otherImagesInStyle.length - 1) {
    arrowRight = (
      <div>
        <ArrowImage
          arrowDirection={'right'}
          icon={'fas fa-angle-right'}
          onImageArrowClick={props.onImageModalArrowClick}
        />
      </div>
    );
  }

  if (props.state.currentImage !== undefined) {
    let indexImage = props.state.currentImage;
    let imageURL = props.state.otherImagesInStyle[indexImage].url;
    return (
      <div className="largeImageModalBucket">
        {arrowLeft}
        <img className="imgStyle magniflier" src={imageURL} />
        {arrowRight}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ZoomImage;
