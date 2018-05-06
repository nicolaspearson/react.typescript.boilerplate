import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'features/About';
import Landing from 'features/Landing';

import './App.scss';

class App extends React.Component {
	constructor(props: {}, context?: any) {
		super(props, context);
	}

	public render() {
		return (
			<Router>
				<div className="AppMainPage">
					<Route path="/" exact={true} component={Landing} />
					<Route path="/about" exact={true} component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
