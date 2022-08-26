import { createStore, combineReducers, applyMiddleware } from 'redux';
import candyReducer from './redux/candyReducer';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';

// const rootReducer = combineReducers({
// 	candy: candyReducer,
// });

function configureStore() {
	return createStore(candyReducer, applyMiddleware(thunk, loggingMiddleware));
}

export default configureStore;
