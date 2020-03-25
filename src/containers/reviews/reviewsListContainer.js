import { connect } from "react-redux";
import ReviewsList from "../../components/reviews/reviewsList.jsx";
import { fetchReviews, fetchMetadata } from "../../redux/actions/reviewsActionCreators.js";

const mapStateToProps = (state) => {
  return {
    // id: state.product_details.id,
    id: 3,
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