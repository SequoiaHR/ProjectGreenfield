import { connect } from 'react-redux';
import productDetailsActions from '../../redux/actions/OverviewActions/productDetailsActions';
import productStylesActions from '../../redux/actions/OverviewActions/productStylesActions';
import OverviewMain from '../../components/overview/OverviewMain';

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
)(OverviewMain);

export default OverviewContainer;
