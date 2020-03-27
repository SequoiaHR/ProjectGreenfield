import React from 'react';

const StyleSelection = function(props) {
  return (
    <div>
      <div>
        SELECTED STYLE --> {props.state.selectedStyle.selectedStyleColor}
      </div>
      <div class="level">
        {props.state.allStyles.map(eachStyle => {
          return (
            <div class="level-item">
              <figure class="image is-48x48">
                <img
                  class="float:left;width:100px;height: 100px;background-size: cover"
                  src={eachStyle.photos[0].thumbnail_url}
                  onClick={() => props.changeStyleOnClick(eachStyle.style_id)}
                ></img>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//<div class="img" style="background-image:url({eachStyle.photos[0].thumbnail_url});"></div>

export default StyleSelection;
