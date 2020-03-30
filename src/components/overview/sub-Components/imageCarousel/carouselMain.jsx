import React from 'react';
import ImageFullSize from './imageFullSize';
import ArrowImage from './arrowImage';
import ThumbnailNav from './thumbnailNav';

const ImageCarousel = function(props) {
  let arrowLeft = <div></div>;
  let arrowRight = <div></div>;

  //conditional logic for the arrows appearing/not appearing
  if (props.state.currentImage !== 0) {
    arrowLeft = (
      <div>
        <ArrowImage
          arrowDirection={'left'}
          icon={'fas fa-arrow-left'}
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
          icon={'fas fa-arrow-right'}
          onImageArrowClick={props.onImageArrowClick}
        />
      </div>
    );
  }

  return (
    <div className="columns">
      {arrowLeft}
      <div>
        <ImageFullSize state={props.state} />
        <ThumbnailNav
          state={props.state}
          onNavArrowClick={props.onNavArrowClick}
          changeImageOnThumbnailClick={props.changeImageOnThumbnailClick}
        />
      </div>
      {arrowRight}
    </div>
  );
};
export default ImageCarousel;
