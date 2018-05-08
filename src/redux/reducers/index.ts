import { routerReducer } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';

import { FlagReducer } from './FlagReducer';
import { RootState } from './state';

export { RootState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
	flags: FlagReducer,
	router: routerReducer
});
