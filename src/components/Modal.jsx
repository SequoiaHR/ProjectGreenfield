import React from "react";

const Modal = ({title, children, onExitClick}) => {
  return (
    <div>
      <div class="modal is-active">
        <div onClick={onExitClick} class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">{title}</p>
          </header>
          <section class="modal-card-body">
            {children}
          </section>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          onClick={onExitClick}
        ></button>
      </div>
    </div>
  );
};

//need to close modal as well.
export default Modal;
