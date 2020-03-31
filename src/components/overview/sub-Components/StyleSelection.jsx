import React from 'react';

const imgStyling = {
  position: 'absolute',
  maxWidth: '100%',
  width: '100%',
  height: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate( -50%, -50%)'
};

const circleStyling = {
  float: 'left',
  position: 'relative',
  borderRadius: '50%',
  backgroundColor: 'black',
  width: '80px',
  height: '80px',
  overflow: 'hidden',
  marginRight: '10px'
};

const rowStyle = {
  width: '380px',
  height: '80px',
  marginTop: '7px',
  marginBottom: '7px'
};

const containerStyle = {
  marginTop: '15px',
  marginBottom: '15px'
};

const StyleSelection = function(props) {
  //get our rows of styles
  let styleRows = [];
  for (let index = 0; index < props.state.allStyles.length; index += 4) {
    let row = props.state.allStyles.slice(index, index + 4);
    styleRows.push(row);
  }
  var outerkey = 0;
  var innerkey = 0;
  return (
    <div>
      <div style={{ fontSize: '15pt' }}>
        SELECTED STYLE --> {props.state.selectedStyle.selectedStyleColor}
      </div>
      <div style={containerStyle}>
        {styleRows.map(eachStyleRow => {
          outerkey++;
          return (
            <div style={rowStyle} key={outerkey}>
              {eachStyleRow.map(eachStyle => {
                innerkey++;
                return (
                  <div style={circleStyling} key={innerkey}>
                    <img
                      style={imgStyling}
                      src={eachStyle.photos[0].thumbnail_url}
                      onClick={() =>
                        props.changeStyleOnClick(eachStyle.style_id)
                      }
                    ></img>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelection;
