import React from "react";
import DummyContainer from "./containers/dummyContainer.js";
import ReviewsListContainer from "./containers/reviews/reviewsListContainer.js";

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <DummyContainer />
      <ReviewsListContainer />
    </div>
  );
}

export default App;
