import { connect } from "react-redux";
import ReviewsList from "../../components/reviews/reviewsList.jsx";
import { fetchReviews, fetchMetadata } from "../../redux/actions/reviewsActionCreators.js";

const mapStateToProps = (state) => {
  return {
    id: state.product_details.id,
    reviews: state.reviews,
    metadata: state.reviewsMetadata
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (id) => {
      dispatch(fetchReviews(id));
      dispatch(fetchMetadata(id));
    }
  }
};

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;