import React from "react";
import DummyContainer from "./containers/dummyContainer.js";
import ListContainer from "./containers/productDetails/listContainer.js";

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <DummyContainer />
      {/* <ListContainer listName="Related"/>
      <ListContainer listName='Outfit'/> */}
    </div>
  );
}

export default App;
