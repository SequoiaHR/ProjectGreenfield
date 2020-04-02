import { connect } from "react-redux";
import List from "../../components/productDetails/list.jsx";
import { fetchRelatedProducts } from "../../redux/actions/getRelatedProducts.js";
import { fetchRelatedReviews } from "../../redux/actions/getRelatedReviews.js";
import { fetchRelatedImages } from "../../redux/actions/getRelatedImages.js";

const mapStateToProps = (state, ownProps) => {
  return {
    pageProduct: state.product_details,
    products: state.related,
    productsImages: state.relatedImages,
    productsReviews: state.relatedReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRelatedDataAsync: id => {
      dispatch(fetchRelatedProducts(id));
      dispatch(fetchRelatedImages(id));
      dispatch(fetchRelatedReviews(id));
    }
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
