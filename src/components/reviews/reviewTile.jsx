import React from "react";

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      verified: false
    };
    this.toggleExpandBound = this.toggleExpand.bind(this);
  }

  componentDidMount() {
    // logic to check for verified user
  }

  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    let { review } = this.props;
    return (
      <div className="tile is-child box">
        <div>{review.rating}-star rating goes here</div>
        {this.state.verified ?
          <div className="has-text-right is-size-6">{review.reviewer_name}, {review.date}</div>
          : <div className="has-text-right is-size-7">{review.reviewer_name}, {review.date}</div>}
        <div className="subtitle">{review.summary}</div>
        {this.state.expanded || review.body.length <= 250
          ? <div>{review.body}</div>
          : <div>{review.body.slice(0, 250)}...</div>}
        {review.body.length > 250 && !this.state.expanded
          ? <div className="is-size-7" onClick={this.toggleExpandBound}>Show more</div>
          : null}
        {this.state.expanded
          ? <div className="is-size-7" onClick={this.toggleExpandBound}>Show less</div>
          : null}
        {review.recommend
          ? <div>I recommend this product</div>
          : null}
        {review.response
          ? <div>Seller response:<br />{review.response}</div>
          : null}
        <div className="is-size-7">Helpful? Yes({review.helpfulness}) | Report</div>
      </div>
    );
  }

}

export default ReviewTile;