import React from "react";
import ReviewBreakdown from "./reviewBreakdown.jsx";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsShown: 0,
      showMoreButton: true,
      filters: new Set()
    };
    this.loadMoreBound = this.loadMore.bind(this);
    this.toggleFilterBound = this.toggleFilter.bind(this);
    this.clearFiltersBound = this.clearFilters.bind(this);
  }

  componentDidMount() {
    // get metadata dispatch
    // get reviews dispatch
    // set state reviewsShown to min of 2 or length of reviews
    // if length of reviews <= 2,
      // set state showMoreButton to false
  }

  loadMore() {
    //  if state reviews shown + 2 is >= length of reviews prop,
      // set state showMoreButton to false
      // and state reviewsShown to length of prop
    // else
    this.setState({
      reviewsShown: this.state.reviewsShown + 2
    });
  }

  toggleFilter(stars) {
    let current = this.state.filters;
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
    return(
      <div>
        <ReviewBreakdown
          metadata={this.props.metadata}
          filters={this.state.filters}
          toggleHandler={this.toggleFilterBound}
          clearHandler={this.clearFiltersBound} />
        {/* if filters has any filters, apply them to list in props */}
        {/* slice correct number of reviews and and map to list tile components */}
        <div>
          Reviews List Placeholder: Showing {this.state.reviewsShown} reviews
          {this.state.showMoreButton ? <div onClick={this.loadMoreBound}>More Reviews</div>
          : null}
        </div>
      </div>
    );
  }
}

export default ReviewsList;