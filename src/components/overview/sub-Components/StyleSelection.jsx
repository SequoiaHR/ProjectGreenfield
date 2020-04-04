import React from 'react';
import './componentStyle.css';

const StyleSelection = function(props) {
  //logic to create rows of styles
  let styleRows = [];
  for (let index = 0; index < props.state.allStyles.length; index += 4) {
    let row = props.state.allStyles.slice(index, index + 4);
    styleRows.push(row);
  }

  return (
    <div>
      <div style={{ fontSize: '15pt' }}>
        SELECTED STYLE --> {props.state.selectedStyle.selectedStyleColor}
      </div>
      <div className="containerStyle">
        {styleRows.map((eachStyleRow, index) => {
          return (
            <div className="rowStyle" key={index}>
              {eachStyleRow.map((eachStyle, index) => {
                //conditional logic for the selected style having a border
                let selectedStyleBorder;
                if (
                  eachStyle.style_id ===
                  props.state.selectedStyle.selectedStyleId
                ) {
                  selectedStyleBorder = 'circleStyling selectedStyleBorder';
                } else {
                  selectedStyleBorder = 'circleStyling regularStyleBorder';
                }
                //some data has no images, this condtional logic hides those styles
                if (eachStyle.photos[0].thumbnail_url !== null) {
                  return (
                    <div className={selectedStyleBorder} key={index}>
                      <img
                        className="imgStyling"
                        src={eachStyle.photos[0].thumbnail_url}
                        onClick={() =>
                          props.changeStyleOnClick(eachStyle.style_id)
                        }
                      ></img>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelection;
