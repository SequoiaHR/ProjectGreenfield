import React from 'react';

const Description = function(props) {
  if (props.state.description.slogan !== undefined) {
    return (
      <div className="columns">
        <div className="column">
          <div
            style={{
              fontWeight: 'bold'
            }}
          >
            {props.state.description.slogan}
          </div>
          <div style={{ borderRight: '2px solid gray', height: '75%' }}>
            {props.state.description.productDescription}
          </div>
        </div>
        <div className="column" style={{ marginTop: '23px' }}>
          {props.state.description.features.map((eachFeature, index) => {
            return (
              <div key={index}>
                {eachFeature.feature}: {eachFeature.value}
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Description;
