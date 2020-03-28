import { connect } from "react-redux";
import addReviewForm from "../../components/reviews/addReviewForm.jsx";

const mapStateToProps = (state) => {
  return {
    id: state.product_details.id,
    name: state.product_details.name
  };
}

const AddReviewFormContainer = connect(mapStateToProps, null)(addReviewForm);

export default AddReviewFormContainer;