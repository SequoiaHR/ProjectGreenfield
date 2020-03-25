import React from "react";

const DummyButton = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default DummyButton;
