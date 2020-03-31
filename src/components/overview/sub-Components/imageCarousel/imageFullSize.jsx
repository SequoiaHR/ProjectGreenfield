import React from 'react';
import './imagesFullStyle.css';

const ImageFullSize = function(props) {
  if (props.state.currentImage !== undefined) {
    let indexImage = props.state.currentImage;
    let imageURL = props.state.otherImagesInStyle[indexImage].url;

    return (
      <div className="divStyle">
        <div></div>
        <span className="helper"></span>
        <img className="imgStyle" src={imageURL} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ImageFullSize;
