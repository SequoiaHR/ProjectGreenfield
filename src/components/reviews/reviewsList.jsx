import React from "react";
import ReviewBreakdown from "./reviewBreakdown.jsx";
import ReviewTile from "./reviewTile.jsx";
import Modal from "../Modal.jsx";
import AddReviewFormContainer from "../../containers/reviews/addReviewFormContainer.js";

import recordInteraction from "../../interactionsHelper.js";
import "./reviews.css";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsShown: 2,
      sort: "relevant",
      filters: new Set(), // no filters at first
      modalOpen: false // for 'add a review' modal
    };
    this.changeLoadBound = this.changeLoad.bind(this);
    this.toggleFilterBound = this.toggleFilter.bind(this);
    this.clearFiltersBound = this.clearFilters.bind(this);
    this.openModalBound = this.openModal.bind(this);
    this.exitModalBound = this.exitModal.bind(this);
    this.sortBound = this.sort.bind(this);
  }

  componentDidMount() {
    // fetch reviews and metadata from API
    this.props.getData(this.props.id, "relevant");
  }

  componentDidUpdate(prevProps) {
    // when ID changes from react router, repeat fetch and reset state
    if (this.props.id !== prevProps.id) {
      this.props.getData(this.props.id, "relevant");
      this.setState({
        reviewsShown: 2,
        sort: "relevant",
        filters: new Set(),
        modalOpen: false
      });
    }
  }

  changeLoad(direction) {
    // either load two more reviews or collapse reviews back to 2
    this.setState({
      reviewsShown: direction === "more"
      ? this.state.reviewsShown + 2
      : 2
    });
    if (direction === "more") {
      recordInteraction(`button#${this.props.id}-show-more`, "Reviews")
    } else {
      recordInteraction(`button#${this.props.id}-show-fewer`, "Reviews")
    }
  }

  toggleFilter(event) { // add or remove a star filter
    const stars = Number(event.target.dataset.stars);
    let current = new Set(this.state.filters);
    if (current.has(stars)) {
      current.delete(stars);
      event.target.setAttribute("style", "font-weight:normal");
    } else {
      current.add(stars);
      event.target.setAttribute("style", "font-weight:bold");
    }
    this.setState({
      filters: current
    });
    recordInteraction(`#${event.target.id}`, "Reviews");
  }

  clearFilters(event) {
    this.setState({
      filters: new Set()
    });
    // remove bold styling from any selected filters
    const filters = Array.from(document.getElementsByClassName("filter-option"));
    filters.forEach((el) => {
      el.setAttribute("style", "font-weight:normal");
    });
    recordInteraction(`#${event.target.id}`, "Reviews");
  }

  sort(event) { // update reviews list according to sort selected
    this.setState({
      sort: event.target.value
    }, () => {
      this.props.sortReviews(this.props.id, this.state.sort);
    });
    recordInteraction(`#${event.target.id}`, "Reviews");
  }

  openModal(event) {
    this.setState({
      modalOpen: true
    });
    recordInteraction(`button#${event.target.id}`, "Reviews");
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
      <div id="reviews-section">
        <div className="title is-4" id="reviews-title">RATINGS & REVIEWS</div>
        <div>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-4">
              <ReviewBreakdown
                metadata={this.props.metadata}
                filters={this.state.filters}
                toggleHandler={this.toggleFilterBound}
                clearHandler={this.clearFiltersBound} />
            </div>
            <div className="tile is-parent is-vertical">
              <label>
                {reviews.length} reviews, sorted by{" "}
                <select className="select" id={`${this.props.id}-change-sort`} name="sort" value={this.state.sort} onChange={this.sortBound}>
                  <option value="relevant">relevance</option>
                  <option value="newest">recent</option>
                  <option value="helpful">helpfulness</option>
                </select>
              </label>
              <div id="review-tiles">
                {tiles.map((review) => { // map out tiles (currently showing)
                  return <ReviewTile key={review.review_id} review={review} id={this.props.id} />;
                })}
              </div>
              <div className="tile is-child">
                {reviews.length > this.state.reviewsShown // conditionally render show more or collapse
                  ? <button className="button is-outlined is-primary show-more-reviews" id={`${this.props.id}-show-more`} onClick={() => this.changeLoadBound("more")}>MORE REVIEWS</button>
                  : reviews.length > 2 
                    ? <button className="button is-outlined is-primary" id={`${this.props.id}-show-fewer`} onClick={() => this.changeLoadBound("fewer")}>COLLAPSE REVIEWS</button>
                    : null}
                <button className="button is-outlined is-primary add-review" id={`${this.props.id}-add-review`} onClick={this.openModalBound}>ADD A REVIEW</button>
                {this.state.modalOpen
                  ? <Modal title="Write Your Review" onExitClick={this.exitModalBound}>
                    <AddReviewFormContainer 
                      characteristics={this.props.metadata.characteristics} 
                      id={this.props.id} 
                      exit={this.exitModalBound}
                      fetch={this.props.getData}
                      sort={this.state.sort} />
                    </Modal>
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsList;