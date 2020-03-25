import { connect } from "react-redux";
import ReviewsList from "../../components/reviews/reviewsList.jsx";
import { fetchReviews } from "../../redux/actions/reviewsActionCreators.js";

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviews: () => {
      dispatch(fetchReviews());
    }
  }
};

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;