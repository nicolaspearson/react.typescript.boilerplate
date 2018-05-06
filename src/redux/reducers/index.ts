import { routerReducer, RouterState } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';

import { FlagReducer } from './FlagReducer';
import { RootState } from './state';

export { RootState, RouterState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
	flags: FlagReducer,
	router: routerReducer
});
