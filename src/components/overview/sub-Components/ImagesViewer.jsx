import React, { Component } from 'react';

const ImagesViewer = function(props) {
  if (props.state.images.currentImage !== undefined) {
    return (
      <section class="section">
        <div class="container">
          <img
            class="has-ratio"
            width="540"
            height="560"
            src={props.state.images.currentImage.url}
          />
        </div>
      </section>
    );
  } else {
    return <div></div>;
  }
};

export default ImagesViewer;
