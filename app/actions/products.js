import * as types from './types';

export const receiveProducts = (products) => {
    return {
        type: types.RECEIVE_PRODUCTS,
        payload: products
    };
};

export const fetchProducts = () => {
    const fakeProducts = require('../data/products').products;
    return dispatch => dispatch(receiveProducts(fakeProducts));
};
