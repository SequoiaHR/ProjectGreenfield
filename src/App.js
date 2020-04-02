import React from "react";

// import {DummyContainer, DumdumContainer} from "./containers/dummyContainer.js";
import ReviewsListContainer from "./containers/reviews/reviewsListContainer.js";
import QuestionListContainer from "./containers/questions/questionListContainer";
import ListContainer from "./containers/productDetails/listContainer.js";
import OverviewContainer from "./containers/overview/overviewContainer";
import Banner from "./components/banner.jsx";

function App(props) {
  const {
    match: { params }
  } = props;
  return (
    <div className="App container">
      <Banner />
      <div className="container">
        <OverviewContainer paramsId={params.id} />
      </div>
      <div className="container">
        <ReviewsListContainer id={params.id} />
      </div>
      <div className="box">
        <QuestionListContainer paramsId={params.id} />
      </div>

      <section>
        <ListContainer paramsId={params.id} listName="Related" />
      </section>

      <section>
        <ListContainer paramsId={params.id} listName="Outfit" />
      </section>
    </div>
  );
}

export default App;
