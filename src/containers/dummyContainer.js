import { connect } from 'react-redux';
import DummyButton from '../components/dummyComponent.jsx'
import addToArrayDummy from "../redux/actionCreators/addDummyActionCreator.js"

const mapStateToProps = (state) => {
    return {
      text: state.dummy[state.dummy.length - 1]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(addToArrayDummy("Back Again Dummy!"));
        }
    }
}

const DummyContainer = connect(mapStateToProps, mapDispatchToProps)(DummyButton);

export default DummyContainer;