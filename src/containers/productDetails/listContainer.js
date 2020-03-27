import { connect } from "react-redux";
import List from "../../components/productDetails/list.jsx";
import { fetchRelatedProducts } from "../../redux/actions/getRelatedProducts.js";
import { fetchRelatedImages } from "../../redux/actions/getRelatedImages.js";

const mapStateToProps = (state, ownProps) => {
  return {
    pageProduct: state.product_details,
    products: state.related,
    productsImages: state.relatedImages
    //Still need to map avgRating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRelatedDataAsync: id => {
      dispatch(fetchRelatedProducts(id));
      dispatch(fetchRelatedImages(id));
    },
    onClickDetails: e => {
      console.log("new product ID to switch to: ", e.target.name);
      //dispatch(actionCreatorToRouteToNewItem);
    }
  };
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
