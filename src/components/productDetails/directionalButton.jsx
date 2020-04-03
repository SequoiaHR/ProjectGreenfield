import React from "react";
import "./directionalButton.css";

function DirectionalButton({ arrowDirection, icon, onArrowClick, listName }) {
  return (
    <button
      onClick={() => {
        onArrowClick(arrowDirection);
      }}
      className={`button is-medium directionalButton button-${listName}-${arrowDirection}`}
    >
      <i className={icon}></i>
    </button>
  );
}

export default DirectionalButton;
