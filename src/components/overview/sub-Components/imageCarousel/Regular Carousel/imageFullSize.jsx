import React from 'react';
import './carouselStyling.css';
import zoomImg from './zoom.png';
import ArrowImage from './arrowImage';

const ImageFullSize = function(props) {
  let arrowLeft = <div></div>;
  let arrowRight = <div></div>;

  //conditional logic for the arrows appearing/not appearing
  if (props.state.currentImage !== 0) {
    arrowLeft = (
      <div>
        <ArrowImage
          arrowDirection={'left'}
          icon={'fas fa-angle-left'}
          onImageArrowClick={props.onImageArrowClick}
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
          onImageArrowClick={props.onImageArrowClick}
        />
      </div>
    );
  }

  if (props.state.currentImage !== undefined) {
    let indexImage = props.state.currentImage;
    let imageURL = props.state.otherImagesInStyle[indexImage].url;
    return (
      <div className="largeImageBucket">
        {arrowLeft}
        <img src={zoomImg} className="zoom" onClick={props.zoomImage} />
        <img
          className="imgStyle"
          src={
            imageURL === null
              ? 'https://vectorified.com/images/default-image-icon-14.png'
              : imageURL
          }
        />
        {arrowRight}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ImageFullSize;
