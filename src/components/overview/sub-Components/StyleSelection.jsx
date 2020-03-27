import React from 'react';

const StyleSelection = function(props) {
  return (
    <div>
      <div>
        SELECTED STYLE --> {props.state.selectedStyle.selectedStyleColor}
      </div>
      {props.state.allStyles.map(eachStyle => {
        return (
          <div>
            <figure class="image is-48x48">
              <img
                class="is-rounded has-ratio"
                src={eachStyle.photos[0].thumbnail_url}
                onClick={() => props.changeStyleOnClick(eachStyle.style_id)}
              ></img>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default StyleSelection;
