import React from "react";
import "./directionalButton.css";

function DirectionalButton({ arrowDirection, icon, onArrowClick }) {
  return (
    <button
      onClick={() => {
        onArrowClick(arrowDirection);
      }}
      class="button is-medium directionalButton"
    >
      <i class={icon}></i>
    </button>
  );
}

export default DirectionalButton;
