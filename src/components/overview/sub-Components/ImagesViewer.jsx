import React, { Component } from 'react';

const divStyle = {
  width: '400px',
  height: '480px',
  overflow: 'hidden',
  backgroundColor: 'black',
  float: 'left',
  display: 'block',
  margin: 'auto'
};

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative',
  margin: 'auto',
  height: 'auto',
  top: '50%',
  left: '50%',
  verticalAlign: 'middle',

  transform: 'translate( -50%, -50%)'
};

const helper = {
  display: 'inline-block',
  height: '100%',
  verticalAlign: 'middle'
};

const ImagesViewer = function(props) {
  if (props.state.images.currentImage !== undefined) {
    return (
      <div style={divStyle}>
        <span class={helper}></span>
        <img style={imgStyle} src={props.state.images.currentImage.url} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ImagesViewer;
