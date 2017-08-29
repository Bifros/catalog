import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import productsReducer from '../reducers/products';

const rootReducer = combineReducers({
    routing,
    products: productsReducer
});

export default rootReducer;
