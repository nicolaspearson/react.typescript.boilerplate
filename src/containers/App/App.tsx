import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { FlagActions } from '../../redux/actions';
import { RootState } from '../../redux/reducers';

import About from 'features/About';
import Feature from 'features/Feature';
import Landing from 'features/Landing';

import './style.scss';

export namespace App {
	export interface Props extends RouteComponentProps<void> {
		flags: RootState.FlagState;
		actions: FlagActions;
	}
}

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
