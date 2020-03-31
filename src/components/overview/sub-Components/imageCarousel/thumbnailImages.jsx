import React from 'react';
import './thumbnailImages.css';

const ThumbnailImages = function(props) {
  //divide into rows to make easier to manipulate
  let thumbnailRows = [];
  for (
    let index = 0;
    index < props.state.otherImagesInStyle.length;
    index += 3
  ) {
    let row = props.state.otherImagesInStyle.slice(index, index + 3);
    thumbnailRows.push(row);
  }

  //this is just to give me a random key to stop console warnings
  let keycounter = 0;
  //conditional logic to render page
  if (props.state.currentThumbnailRow !== undefined) {
    return (
      <div>
        {thumbnailRows[props.state.currentThumbnailRow].map(
          eachThumbnailImage => {
            keycounter++;
            return (
              <div className="column" key={keycounter}>
                <img
                  className="thumbStyle"
                  src={eachThumbnailImage.thumbnail_url}
                  onClick={() => {
                    props.changeImageOnThumbnailClick(
                      eachThumbnailImage.thumbnail_url
                    );
                  }}
                />
              </div>
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
