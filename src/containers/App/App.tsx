import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'features/About';
import Features from 'features/Features';
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
					<Route path="/features" exact={true} component={Features} />
					<Route path="/about" exact={true} component={About} />
				</div>
			</Router>
		);
	}
}

export default App;
