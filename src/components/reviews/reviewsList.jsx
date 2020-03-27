import React from "react";
import ReviewBreakdown from "./reviewBreakdown.jsx";
import ReviewTile from "./reviewTile.jsx";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsShown: 2,
      filters: new Set()
    };
    this.changeLoadBound = this.changeLoad.bind(this);
    this.toggleFilterBound = this.toggleFilter.bind(this);
    this.clearFiltersBound = this.clearFilters.bind(this);
  }

  componentDidMount() {
    // fetch reviews and metadata from API
    this.props.getData(3); // HARD-CODED FOR NOW
  }

  changeLoad(direction) {
    this.setState({
      reviewsShown: direction === "more"
      ? this.state.reviewsShown + 2
      : 2
    });
  }

  toggleFilter(stars) {
    let current = new Set(this.state.filters);
    if (current.has(stars)) {
      current.delete(stars);
    } else {
      current.add(stars);
    }
    this.setState({
      filters: current
    });
  }

  clearFilters() {
    this.setState({
      filters: new Set()
    });
  }

  render() {
    var tiles = [];
    if (this.state.filters.size > 0) { // add star-filtered reviews to tile list
      // filter reviews
    } else {
      tiles = this.props.reviews; // if no filters, all reviews
    }
    tiles = tiles.slice(0, this.state.reviewsShown); // select only num to be shown

    return(
      <div>
        <ReviewBreakdown
          metadata={this.props.metadata}
          filters={this.state.filters}
          toggleHandler={this.toggleFilterBound}
          clearHandler={this.clearFiltersBound} />
        <div>
          {tiles.map((review) => {
            return <ReviewTile key={review.review_id} review={review} />
          })}
        </div>
        <div>
          {this.props.reviews.length > this.state.reviewsShown
          ? <div onClick={() => this.changeLoadBound("more")}>More Reviews</div>
          : <div onClick={() => this.changeLoadBound("fewer")}>Collapse Reviews</div>}
        </div>
      </div>
    );
  }
}

export default ReviewsList;