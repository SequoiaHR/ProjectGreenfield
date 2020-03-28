import React from "react";

// import {DummyContainer, DumdumContainer} from "./containers/dummyContainer.js";
import ReviewsListContainer from "./containers/reviews/reviewsListContainer.js";
import QuestionListContainer from "./containers/questions/questionListContainer";
import ListContainer from "./containers/productDetails/listContainer.js";
import OverviewContainer from "./containers/overview/overviewContainer";

function App() {
  return (
    <div className="App" className="container">
      <h1 className="title is-1">Sequoia Shop</h1>
      {/* <DummyContainer />
      <DumdumContainer/> */}
      <div className="container">
        <OverviewContainer />
      </div>
      <div className="container">
        <ReviewsListContainer />
      </div>
      <div className="container">
        <QuestionListContainer />
      </div>

      <div className="box">
        <div className="box">

          <div>
            <h1 class="title">Related Items</h1>
          </div>

          <ListContainer listName="Related" />
        </div>
        <div className="box">
          <div>
            <h1 class="title">Your Outfit</h1>
          </div>
          <ListContainer listName="Outfit" />
        </div>
      </div>
    </div>
  );
}

export default App;
