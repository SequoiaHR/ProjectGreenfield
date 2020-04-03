import React from "react";
import "./directionalButton.css";

function DirectionalButton({ arrowDirection, icon, onArrowClick, listName }) {
  return (
    <button
      onClick={() => {
        onArrowClick(arrowDirection);
      }}
      class={`button is-medium directionalButton button-${listName}-${arrowDirection}`}
    >
      <i class={icon}></i>
    </button>
  );
}

export default DirectionalButton;
