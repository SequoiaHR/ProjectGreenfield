import React from 'react';

// import {DummyContainer, DumdumContainer} from "./containers/dummyContainer.js";
import ReviewsListContainer from './containers/reviews/reviewsListContainer.js';
import QuestionListContainer from './containers/questions/questionListContainer';
import ListContainer from './containers/productDetails/listContainer.js';
import OverviewContainer from './containers/overview/overviewContainer';

function App(props) {
  const {
    match: { params }
  } = props;
  return (
    <div className="App container">
      <h1 className="title is-1">Sequoia Shop</h1>
      {/* <DummyContainer />
      <DumdumContainer/> */}
      <div className="container">
        <OverviewContainer paramsId={params.id} />
      </div>
      <div className="container">
        <ReviewsListContainer id={params.id} />
      </div>
      <div className="container">
        <QuestionListContainer paramsId={params.id} />
      </div>

      <div className="box">
        <ListContainer paramsId={params.id} listName="Related" />
      </div>
      <div className="box">
        <ListContainer paramsId={params.id} listName="Outfit" />
      </div>
    </div>
  );
}

export default App;
