import { Flag } from '../../models/flag';

export interface RootState {
	flags: RootState.FlagState;
	router: any;
}

export namespace RootState {
	export type FlagState = Flag[];
}
