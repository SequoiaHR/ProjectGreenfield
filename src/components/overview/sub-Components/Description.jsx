import React from 'react';

const Description = function(props) {
  //conditional logic for async
  if (props.state.description.slogan !== undefined) {
    return (
      <div className="columns" style={{ marginTop: '-30px' }}>
        <div className="column">
          <div
            style={{
              fontWeight: 'bold'
            }}
          >
            {props.state.description.slogan}
          </div>
          <div
            style={{
              borderRight: '2px solid gray',
              height: '75%',
              width: '95%'
            }}
          >
            <div style={{ marginRight: '10px' }}>
              {props.state.description.productDescription}
            </div>
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
