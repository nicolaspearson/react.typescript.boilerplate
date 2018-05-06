import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { FlagActions } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

import About from 'features/About';
import Feature from 'features/Feature';
import Landing from 'features/Landing';
import { omit } from '../../utils/omit';

import './style.scss';

export namespace App {
	export interface Props extends RouteComponentProps<void> {
		flags: RootState.FlagState;
		actions: FlagActions;
	}
}

@connect(
	(state: RootState): Pick<App.Props, 'flags'> => {
		return { flags: state.flags };
	},
	(dispatch: Dispatch<RootState>): Pick<App.Props, 'actions'> => ({
		actions: bindActionCreators(omit(FlagActions, 'Type'), dispatch)
	})
)
class App extends React.Component {
	constructor(props: {}, context?: any) {
		super(props, context);
	}

	public render() {
		return (
			<Router>
				<div className="AppMainPage">
					<Route path="/" exact={true} component={Landing} />
					<Route path="/features" exact={true} component={Feature} />
					<Route path="/about" exact={true} component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
