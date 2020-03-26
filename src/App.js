import React from "react";
import DummyContainer from "./containers/dummyContainer.js";
import ReviewsListContainer from "./containers/reviews/reviewsListContainer.js";
import QuestionList from "./components/questions/questionsList";
import ListContainer from "./containers/productDetails/listContainer.js";

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <DummyContainer />
      {/* <ReviewsListContainer /> */}
      {/* <QuestionList /> */}
       {/* <ListContainer listName="Related"/>
      <ListContainer listName='Outfit'/> */}
    </div>
  );
}

export default App;