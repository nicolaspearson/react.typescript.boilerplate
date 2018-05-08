import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Reducer, Store } from 'redux';

import { Logger } from '../../middleware/Logger';
import { rootReducer, RootState } from '../reducers';

export function configureStore(history: History, initialState: RootState): Store<RootState> {
	const middleware = applyMiddleware(Logger, routerMiddleware(history));

	const store = createStore(rootReducer as Reducer<RootState>, initialState, middleware) as Store<
		RootState
	>;

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers');
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}
