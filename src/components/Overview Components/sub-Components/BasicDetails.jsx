import React from 'react';

const BasicDetails = function(props) {
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

export default BasicDetails;
