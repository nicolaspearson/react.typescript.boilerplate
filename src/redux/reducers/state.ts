import { RouterState } from 'react-router-redux';

import { Flag } from '../../models/flag';

export interface RootState {
	flags: RootState.FlagState;
	router: RouterState;
}

export namespace RootState {
	export type FlagState = Flag[];
}
