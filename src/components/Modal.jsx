import React from 'react';

const Modal = ({ title, children, onExitClick }) => {
  return (
    <div>
      <div className="modal is-active">
        <div onClick={onExitClick} className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
          </header>
          <section className="modal-card-body">{children}</section>
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

export default Modal;
