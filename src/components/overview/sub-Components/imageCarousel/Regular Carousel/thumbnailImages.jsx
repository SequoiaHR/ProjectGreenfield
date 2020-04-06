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

  //conditional logic to render page
  if (props.state.currentThumbnailRow !== undefined) {
    //variables for my thumbnail border logic
    let indexImage = props.state.currentImage;
    let imageURL = props.state.otherImagesInStyle[indexImage].url;
    return (
      <div className="imagesNavBucket">
        {thumbnailRows[props.state.currentThumbnailRow].map(
          (eachThumbnailImage, index) => {
            let selectedThumbnail;
            if (eachThumbnailImage.url === imageURL) {
              selectedThumbnail = 'thumbStyle selectedStyleBorder';
            } else {
              selectedThumbnail = 'thumbStyle regularStyleBorder';
            }
            return (
              <img
                className={selectedThumbnail}
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
