import React from "react";
import {DummyContainer, DumdumContainer} from "./containers/dummyContainer.js";
import QuestionList from "./components/questions/questionsList";

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <DummyContainer />
      <DumdumContainer/>
      {/* <QuestionList /> */}
    </div>
  );
}

export default App;
