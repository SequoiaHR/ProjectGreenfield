import React from 'react';

const ImageModal = ({ title, children, onExitClick }) => {
  return (
    <div>
      <div className="modal is-active">
        <div onClick={onExitClick} class="modal-background"></div>
        <div className="modal-card">
          <header class="modal-card-head">
            <p className="modal-card-title">{title}</p>
          </header>
          <div className="modal-card-body">{children}</div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={onExitClick}
        ></button>
      </div>
    </div>
  );
};

//need to close modal as well.
export default ImageModal;
