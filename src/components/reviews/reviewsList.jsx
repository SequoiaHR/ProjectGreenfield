import React from "react";

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewsShown: 0,
      showMoreButton: true
    };
    this.loadMoreBound = this.loadMore.bind(this);
  }

  componentDidMount() {
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

  render() {
    return(
      // slice review props and map
      <div>
        Reviews List Placeholder: Showing {this.state.reviewsShown} reviews
        {this.state.showMoreButton ? <div onClick={this.loadMoreBound}>More Reviews</div>
        : null}
      </div>
    );
  }
}

export default ReviewsList;