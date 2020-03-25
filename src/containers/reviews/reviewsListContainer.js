import { connect } from "react-redux";
import ReviewsList from "../../components/reviews/reviewsList.jsx";
import { fetchReviews, fetchMetadata } from "../../redux/actions/reviewsActionCreators.js";

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
    metadata: state.reviewsMetadata
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: () => {
      dispatch(fetchReviews());
    },
    getMetadata: () => {
      dispatch(fetchMetadata());
    }
  }
};

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;