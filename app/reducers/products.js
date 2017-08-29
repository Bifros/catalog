import * as types from '../actions/types';

const productsReducer = (state = {}, action) => {
    const newState = Object.assign({}, state);

    switch(action.type) {

        case types.RECEIVE_PRODUCTS: {
            newState.products = action.payload;
            return newState;
        }

        default:
            return newState;
    }
};

export default productsReducer;
