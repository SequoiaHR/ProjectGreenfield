import React from "react";
import ReviewBreakdown from "./reviewBreakdown.jsx";
import ReviewTile from "./reviewTile.jsx";
import Modal from "../Modal.jsx";
import AddReviewFormContainer from "../../containers/reviews/addReviewFormContainer.js";
import "./reviews.css";

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
    this.sortBound = this.sort.bind(this);
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
      event.target.setAttribute("style", "font-weight:normal");
    } else {
      current.add(stars);
      event.target.setAttribute("style", "font-weight:bold");
    }
    this.setState({
      filters: current
    });
    
  }

  clearFilters() {
    this.setState({
      filters: new Set()
    });
    const filters = Array.from(document.getElementsByClassName("filter-option"));
    filters.forEach((el) => {
      el.setAttribute("style", "font-weight:normal");
    });
  }

  sort(event) {
    this.props.sortReviews(this.props.id, event.target.value);
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
        <div className="title">RATINGS & REVIEWS</div>
        <div id="reviews-section">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-4">
              <ReviewBreakdown
                metadata={this.props.metadata}
                filters={this.state.filters}
                toggleHandler={this.toggleFilterBound}
                clearHandler={this.clearFiltersBound} />
            </div>
            <div className="tile is-parent is-vertical">
              <div>
                {reviews.length} reviews, sorted by{" "}
                <select className="select" defaultValue="relevant" onChange={this.sortBound}>
                  <option value="relevant">relevance</option>
                  <option value="newest">recent</option>
                  <option value="helpful">helpfulness</option>
                </select>
              </div>
              {tiles.map((review) => { // map out tiles (currently showing)
                return <ReviewTile key={review.review_id} review={review} id={this.props.id} />;
              })}
              <div className="tile is-child">
                {reviews.length > this.state.reviewsShown // conditionally render show more or collapse
                  ? <button className="button" onClick={() => this.changeLoadBound("more")}>MORE REVIEWS</button>
                  : reviews.length > 2 
                    ? <button className="button" onClick={() => this.changeLoadBound("fewer")}>COLLAPSE REVIEWS</button>
                    : null}
                <button className="button" onClick={this.openModalBound}>ADD A REVIEW</button>
                {this.state.modalOpen
                  ? <Modal title="Write Your Review" onExitClick={this.exitModalBound}>
                    <AddReviewFormContainer characteristics={this.props.metadata.characteristics} />
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