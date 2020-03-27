import React from "react";

function DirectionalButton({ arrowDirection, icon, onArrowClick }) {
  return (
    <div class="column is-narrow">
      <button onClick={() => {onArrowClick(arrowDirection)}} class="button is-small">
        <i class={icon}></i>
      </button>
    </div>
  );
}

export default DirectionalButton;
