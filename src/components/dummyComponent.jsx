import React from "react";

const DummyButton = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const DumdumButton = ({clicker})=>{
  return(
    <div>
      <button onClick={clicker}>+1</button>
    </div>
  );
}

export {DummyButton, DumdumButton}