import { handleActions } from 'redux-actions';
import { RootState } from './state';

import { Flag } from '../../models/flag';
import { FlagActions } from '../actions/FlagActions';

const initialState: RootState.FlagState = [
	{
		name: 'site-nav.closed'
	}
];

export const FlagReducer = handleActions<RootState.FlagState, Flag>(
	{
		[FlagActions.Type.ADD_FLAG]: (state, action) => {
			if (action.payload && action.payload.name) {
				return [
					{
						name: action.payload.name
					},
					...state
				];
			} else {
				return state;
			}
		},
		[FlagActions.Type.DELETE_FLAG]: (state, action) => {
			return state.filter((flag) => flag.name !== (action.payload as any));
		},
		[FlagActions.Type.CLEAR_ALL]: (state, action) => {
			return [];
		}
	},
	initialState
);
