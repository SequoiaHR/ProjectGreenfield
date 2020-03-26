import React from "react";
import {DummyContainer, DumdumContainer} from "./containers/dummyContainer.js";
import ReviewsListContainer from "./containers/reviews/reviewsListContainer.js";
import QuestionList from "./components/questions/questionsList";
import ListContainer from "./containers/productDetails/listContainer.js";
import OverviewContainer from './containers/overviewContainer';


function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <DummyContainer />
      <DumdumContainer/>
     <OverviewContainer />
      {/* <ReviewsListContainer /> */}
      {/* <QuestionList /> */}
       {/* <ListContainer listName="Related"/>
      <ListContainer listName='Outfit'/> */}
    </div>
  );
}

export default App;
