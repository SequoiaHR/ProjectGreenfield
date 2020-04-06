import React from 'react';
import './zoomCarouselStyling.css';

const ThumbnailCircles = function(props) {
  //divide into rows to make easier to manipulate
  let thumbnailRows = [];
  for (
    let index = 0;
    index < props.state.otherImagesInStyle.length;
    index += 4
  ) {
    let row = props.state.otherImagesInStyle.slice(index, index + 4);
    thumbnailRows.push(row);
  }

  //creates circles for naviagtion bar below modal image
  if (props.state.currentThumbnailRow !== undefined) {
    let indexImage = props.state.currentImage;
    let imageURL = props.state.otherImagesInStyle[indexImage].url;
    return (
      <div className="zoomNavigationBucket">
        {thumbnailRows[props.state.currentThumbnailRow].map(
          (eachThumbnailImage, index) => {
            let selectedThumbnail;
            if (eachThumbnailImage.url === imageURL) {
              selectedThumbnail = 'circleZoomNav selectedCircleBorder';
            } else {
              selectedThumbnail = 'circleZoomNav regularCircleBorder';
            }
            return (
              <div
                className={selectedThumbnail}
                onClick={() => {
                  props.changeZoomImageOnCircleClick(
                    eachThumbnailImage.thumbnail_url
                  );
                }}
                key={index}
              />
            );
          }
        )}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ThumbnailCircles;
