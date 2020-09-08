import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';
// import Card from './Card';
// import * as serviceWorker from './serviceWorker';
import 'tachyons';
// import { robots } from './robots';
// import CardList from './CardList';
import App from './containers/App';

const rootReducer = combineReducers({
	searchRobots,
	requestRobots,
});
const logger = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, logger)
);

// ReactDOM.render(
// 	<App store={store} />,
// 	document.getElementById('root')
// );

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
