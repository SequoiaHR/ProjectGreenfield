import React from 'react';

const Description = function(props) {
  if (props.state.description.slogan !== undefined) {
    return (
      <div>
        <div>{props.state.description.slogan}</div>
        <div>{props.state.description.productDescription}</div>
        {props.state.description.features.map(eachFeature => {
          return (
            <div>
              {eachFeature.feature}: {eachFeature.value}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Description;
