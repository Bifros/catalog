import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import ReduxThunk from 'redux-thunk';
import {fetchProducts} from '../actions/products';

export const history = createHistory();

const middleware = [ReduxThunk, routerMiddleware(history)];

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        )
    );
    // Should be moved from func
    store.dispatch(fetchProducts());

    return store;
}
