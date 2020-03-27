import React from 'react';

// import {DummyContainer, DumdumContainer} from "./containers/dummyContainer.js";
import ReviewsListContainer from './containers/reviews/reviewsListContainer.js';
import QuestionListContainer from './containers/questions/questionListContainer';
import ListContainer from './containers/productDetails/listContainer.js';
import OverviewContainer from './containers/overview/overviewContainer';

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      {/* <DummyContainer />
      <DumdumContainer/> */}
      <OverviewContainer />
      <ReviewsListContainer />
      <QuestionListContainer />
      <ListContainer listName="Related" />
      <ListContainer listName="Outfit" />
    </div>
  );
}

export default App;
