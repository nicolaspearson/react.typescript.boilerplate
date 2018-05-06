import { createAction } from 'redux-actions';

import { Flag } from '../../models/flag';

export namespace FlagActions {
	export enum Type {
		ADD_FLAG = 'ADD_FLAG',
		DELETE_FLAG = 'DELETE_FLAG',
		CLEAR_ALL = 'CLEAR_ALL'
	}

	export const addFlag = createAction<PartialPick<Flag, 'name'>>(Type.ADD_FLAG);
	export const deleteFlag = createAction<Flag['name']>(Type.DELETE_FLAG);
	export const clearAll = createAction(Type.CLEAR_ALL);
}

export type FlagActions = Omit<typeof FlagActions, 'Type'>;
