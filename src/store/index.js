import {createStore} from 'redux';

const initialState = {
    inputValue: '',
    isValid: true
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);

    switch(action.type) {
        case 'INPUT_CHANGE':
            return Object.assign({}, state, {inputValue: action.payload});
        case 'VALIDATION':
            return Object.assign({}, state, {isValid: action.payload.includes(state.inputValue)})
        default:
            return state;
    }

}

const store = createStore(reducer);

export default store;
