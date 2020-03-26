import {ADD_DUMMY, COUNT_DUMDUM} from './actionTypes.js';
// import store from "../store.js"; // DO NOT NORMALLY LOAD STORE <- DONE FOR DEMONSTRATION PURPOSES

function addToArrayDummy(text) {
    return {
        type: ADD_DUMMY,
        text: text
    }
}

function addCountToDumdum() {
    return {
        type: COUNT_DUMDUM,
        value: 1
    }
};

export {addToArrayDummy, addCountToDumdum};
