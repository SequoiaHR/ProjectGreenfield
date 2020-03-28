import React from 'react';

const Description = function(props) {
  if (props.state.description.slogan !== undefined) {
    return (
      <div class="columns">
        <div class="column">
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
        <div class="column" style={{ marginTop: '23px' }}>
          {props.state.description.features.map(eachFeature => {
            return (
              <div>
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
