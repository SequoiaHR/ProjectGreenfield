import React from 'react';

const Description = function(props) {
  console.log(props.state.basicDetails.id);
  if (props.state.basicDetails.id !== undefined) {
    return (
      <div>
        <div>{props.state.basicDetails.category}</div>
        <div>{props.state.basicDetails.name}</div>
        <div>${props.state.basicDetails.price}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Description;
