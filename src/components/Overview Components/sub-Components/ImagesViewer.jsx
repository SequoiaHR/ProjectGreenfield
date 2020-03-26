import React, { Component } from 'react';

const ImagesViewer = function(props) {
  if (props.state.images.currentImage !== undefined) {
    return (
      <div>
        <img src={props.state.images.currentImage.url} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ImagesViewer;
