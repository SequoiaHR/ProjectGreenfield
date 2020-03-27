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

  toggleFilter(event) {
    const stars = Number(event.target.dataset.stars);
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
    var reviews = [];
    if (this.state.filters.size > 0) { // add star-filtered reviews to tile list
      for (const review of this.props.reviews) {
        if (this.state.filters.has(review.rating)) {
          reviews.push(review);
        }
      }
    } else {
      reviews = this.props.reviews; // if no filters, all reviews
    }
    var tiles = reviews.slice(0, this.state.reviewsShown); // select only num to be shown

    return(
      <div>
        <div>RATINGS & REVIEWS</div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <ReviewBreakdown
              metadata={this.props.metadata}
              filters={this.state.filters}
              toggleHandler={this.toggleFilterBound}
              clearHandler={this.clearFiltersBound} />
          </div>
          <div className="tile is-parent is-vertical">
            {tiles.map((review) => { // map out tiles (currently showing)
              return <ReviewTile key={review.review_id} review={review} />;
            })}
            <div className="tile is-child">
              {reviews.length > this.state.reviewsShown // conditionally render show more or collapse
                ? <div onClick={() => this.changeLoadBound("more")}>More Reviews</div>
                : reviews.length > 2 
                  ? <div onClick={() => this.changeLoadBound("fewer")}>Collapse Reviews</div>
                  : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;