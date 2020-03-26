import { connect } from 'react-redux';
import productDetailsActions from '../redux/actions/OverviewActions/productDetailsActions';
import productStylesActions from '../redux/actions/OverviewActions/productStylesActions';
import overviewMain from '../components/Overview Components/OverviewMain';

const mapStateToProps = state => {
  return {
    storeState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeProductDetails: details => {
      dispatch(productDetailsActions(details));
    },
    storeProductStyles: styles => {
      dispatch(productStylesActions(styles));
    }
  };
};

const OverviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(overviewMain);

export default OverviewContainer;

//what i want the store to look like for my widget

// let storeOverview = {
//   currentProductDetails: {
//     //returned from API
//   },
//   currentProductStyles: {
//     //returned from API
//   },
//   currentUserCart: {
//     //returned from API
//   },
//   currentUserView: {
//     images: {
//       currentImage: String,
//       thumbnailImages: [
//         [{ imageUrl: String }, { imageUrl: String }],
//         [{ imageUrl: String }]
//       ],
//       maximized: Boolean,
//       zoomed: Boolean
//     },
//     starRating: Number,
//     basicDetails: {
//       category: String,
//       name: String,
//       price: Number,
//       reducedPrice: Number
//     },
//     styles: {
//       selectedStyle: String,
//       styles: [{ styleName: String, selected: Boolean, image: String }]
//     },
//     cart: {
//       cartSize: String,
//       cartNumber: Number,
//       favorited: Boolean
//     },
//     description: {
//       slogan: String,
//       productDescription: String,
//       features: [{ feature: String, value: String }]
//     }
//   }
// };
