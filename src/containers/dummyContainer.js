import { connect } from 'react-redux';
// ESLINT gives issues on unused varables without the below comment, and Im pausing on redux -TMD
// eslint-disable-next-line
import {DummyButton, DumdumButton} from '../components/dummyComponent.jsx'
// ESLINT gives issues on unused varables without the below comment, and Im pausing on redux -TMD
// eslint-disable-next-line
import {addToArrayDummy, addCountToDumdum} from "../redux/actions/addDummyActionCreator.js"

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