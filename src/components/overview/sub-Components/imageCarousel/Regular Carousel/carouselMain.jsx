import React from 'react';
import ImageFullSize from './imageFullSize';
import ThumbnailNav from './thumbnailNav';

//entire image carousel with subordinate components
const ImageCarousel = function(props) {
  return (
    <div className="entireImageCarouselStyling">
      <ImageFullSize
        state={props.state}
        onImageArrowClick={props.onImageArrowClick}
        zoomImage={props.zoomImage}
      />
      <ThumbnailNav
        state={props.state}
        onNavArrowClick={props.onNavArrowClick}
        changeImageOnThumbnailClick={props.changeImageOnThumbnailClick}
      />
    </div>
  );
};
export default ImageCarousel;
