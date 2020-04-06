import React from "react";
import moment from "moment";
import axios from "axios";

import StarRating from "../starRating.jsx";
import ReviewPhoto from "./reviewPhoto.jsx";

import "./reviews.css";
import recordInteraction from "../../interactionsHelper.js";

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      numHelpful: 0,
      reported: false,
      verified: false // not currently used
    };
    this.toggleExpandBound = this.toggleExpand.bind(this);
    this.handleHelpfulBound = this.handleHelpful.bind(this);
    this.handleReportBound = this.handleReport.bind(this);
  }


  componentDidMount() {
    let storage = window.localStorage;

    // check whether already reported, for conditional rendering of link
    // shouldn't be possible that it's already reported, but accounting for changes in API
    let reported = JSON.parse(storage.getItem("reported"));
    if (reported) {
      if (reported.indexOf(this.props.review.review_id) >= 0) {
        this.setState({
          reported: true
        });
      }
    }

    this.setState({
      numHelpful: this.props.review.helpfulness
    });
  }


  toggleExpand(event) { // expand or collapse review body
    this.setState({
      expanded: !this.state.expanded
    });
    recordInteraction(`#${event.target.id}`, "Reviews");
  }

  handleHelpful(event) {

    let arr = JSON.parse(window.localStorage.getItem("helpful"));
    if (!arr || arr.indexOf(this.props.review.review_id) === -1) {
      recordInteraction(`#${event.target.id}`, "Reviews");
      if (!arr) {
        arr = [this.props.review.review_id];
      } else if (arr.indexOf(this.props.review.review_id) === -1) {
        arr.push(this.props.review.review_id);
      }
      window.localStorage.setItem("helpful", JSON.stringify(arr));
      this.setState({
        numHelpful: this.state.numHelpful + 1 // avoid re-fetching reviews to display updated num
      });
      axios.put(`http://18.224.200.47/reviews/helpful/${this.props.review.review_id}`)
        .catch((err) => {
          console.log("Error marking helpful:", err);
        });
    }
  }

  handleReport(event) {
    recordInteraction(`#${event.target.id}`, "Reviews");

    let arr = JSON.parse(window.localStorage.getItem("reported"));
    if (arr) {
      arr.push(this.props.review.review_id);
    } else {
      arr = [this.props.review.review_id];
    }
    window.localStorage.setItem("reported", JSON.stringify(arr));
    this.setState({
      reported: true
    });
    axios.put(`http://18.224.200.47/reviews/report/${this.props.review.review_id}`)
      .catch((err) => {
        console.log("Error reporting review:", err);
      });
  }

  render() {
    let { review } = this.props;
    return (
      <div className="tile is-parent">
        <div className="tile is-child box review-tile">
          <div className="level">
            <div className="level-left">

              {/* overall rating */}
              <div className="level-item"><StarRating rating={review.rating} width="15" height="15" /></div>
            </div>
            <div className="level-right">

              {/* verified not currently used */}
              {this.state.verified
                ? <div className="level-item is-size-7">{review.reviewer_name}, {moment(review.date).format("MMMM DD, YYYY")}
                  <br /><i className="fas fa-check-circle"></i> Verified user</div>
                : <div className="level-item is-size-7">{review.reviewer_name}, {moment(review.date).format("MMMM DD, YYYY")}</div>}
            </div>
          </div>

          {/* review summary */}
          <div className="subtitle">{review.summary}</div>

          {/* conditionally render review body as open or closed */}
          {this.state.expanded || review.body.length <= 250
            ? <div>{review.body}</div>
            : <div>{review.body.slice(0, 250)}...</div>}
          {review.body.length > 250 && !this.state.expanded
            ? <div className="actionable is-size-7" id={`${review.review_id}-show-more`} onClick={this.toggleExpandBound}>Show more</div>
            : null}
          {this.state.expanded
            ? <div className="actionable is-size-7" id={`${review.review_id}-show-less`} onClick={this.toggleExpandBound}>Show less</div>
            : null}

          {/* conditionally rendered 'recommended' flag */}
          {review.recommend
            ? <div className="recommend"><i className="fas fa-check"></i> I recommend this product</div>
            : null}

          {/* product photos */}
          <div className="photos-wrapper">
          {review.photos !== undefined && review.photos.length > 0
            ? review.photos.map((photo) => {
              return <ReviewPhoto key={photo.id} photo={photo} id={review.review_id} />;
            })
            : null}
          </div>

          {/* seller response if exists */}
          {review.response !== undefined && review.response !== null && review.response !== "" && review.response !== "null"
            ? <div><strong>Seller response:</strong><br />{review.response}</div>
            : null}
            
          {/* helpful and report actions -- report conditionally rendered as actionable or not */}
          <div className="is-size-7">
            Helpful? <span className="actionable underline" id={`${review.review_id}-helpful`} onClick={this.handleHelpfulBound}>Yes({this.state.numHelpful})</span> | {this.state.reported 
              ? <span>Reported</span>
              : <span className="actionable underline" id={`${review.review_id}-report`} onClick={this.handleReportBound}>Report</span>}
          </div>
        </div>
      </div>
    );
  }

}

export default ReviewTile;
