import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Logger } from '../../middleware/Logger';
import { rootReducer, RootState } from '../reducers';

export function configureStore(history: History, initialState?: RootState): Store<RootState> {
	let middleware = applyMiddleware(Logger, routerMiddleware(history));

	if (process.env.NODE_ENV !== 'production') {
		middleware = composeWithDevTools(middleware);
	}

	const store = createStore(rootReducer as any, initialState, middleware) as Store<RootState>;

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
