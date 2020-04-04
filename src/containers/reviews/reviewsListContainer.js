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
    getData: (id, sort) => {
      dispatch(fetchReviews(id, sort));
      dispatch(fetchMetadata(id));
    },
    sortReviews: (id, sort) => {
      dispatch(fetchReviews(id, sort));
    }
  }
};

const ReviewsListContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewsList);

export default ReviewsListContainer;