import React from "react";
import ReviewBreakdown from "./reviewBreakdown.jsx";
import ReviewTile from "./reviewTile.jsx";
import Modal from "../Modal.jsx";
import AddReviewForm from "./addReviewForm.jsx";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsShown: 2,
      filters: new Set(),
      modalOpen: false
    };
    this.changeLoadBound = this.changeLoad.bind(this);
    this.toggleFilterBound = this.toggleFilter.bind(this);
    this.clearFiltersBound = this.clearFilters.bind(this);
    this.openModalBound = this.openModal.bind(this);
    this.exitModalBound = this.exitModal.bind(this);
  }

  componentDidMount() {
    // fetch reviews and metadata from API
    this.props.getData(27); // HARD-CODED FOR NOW
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

  openModal() {
    this.setState({
      modalOpen: true
    })
  }

  exitModal() {
    this.setState({
      modalOpen: false
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
                ? <button className="button" onClick={() => this.changeLoadBound("more")}>MORE REVIEWS</button>
                : reviews.length > 2 
                  ? <button className="button" onClick={() => this.changeLoadBound("fewer")}>COLLAPSE REVIEWS</button>
                  : null}
              <button className="button" onClick={this.openModalBound}>ADD A REVIEW</button>
              {this.state.modalOpen
                ? <Modal title="Add a Review" onExitClick={this.exitModalBound}><AddReviewForm /></Modal>
                : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;