import React from "react";

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
      <Banner paramsId={params.id}/>
      <div className="container">
        <OverviewContainer paramsId={params.id} />
      </div>
      <div className="container" style={{"marginBottom": "20px"}}>
        <ListContainer paramsId={params.id} listName="Related" />
        <ListContainer paramsId={params.id} listName="Outfit" />
      </div>
      <div className="container" style={{margin: "8vh 0vh 8vh 0vh"}}>
        <QuestionListContainer paramsId={params.id} />
      </div>
      <div className="container">
        <ReviewsListContainer id={params.id} />
      </div>
    </div>
  );
}

export default App;
