import React from 'react';
import './carouselStyling.css';

const ThumbnailImages = function(props) {
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

  //this is just to give me a random key to stop console warnings
  //conditional logic to render page
  if (props.state.currentThumbnailRow !== undefined) {
    return (
      <div className="imagesNavBucket">
        {thumbnailRows[props.state.currentThumbnailRow].map(
          (eachThumbnailImage, index) => {
            return (
              <img
                className="thumbStyle"
                src={eachThumbnailImage.thumbnail_url}
                onClick={() => {
                  props.changeImageOnThumbnailClick(
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

export default ThumbnailImages;
