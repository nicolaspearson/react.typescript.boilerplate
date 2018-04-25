import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Landing from 'features/Landing';

import './App.scss';

class App extends React.Component {
	constructor(props: {}, context?: any) {
		super(props, context);
		this.handleViewSourceCodeClick = this.handleViewSourceCodeClick.bind(this);
	}

	public handleViewSourceCodeClick() {
		window.location.href = 'https://github.com/nicolaspearson/react.material.boilerplate';
	}

	public render() {
		return (
			<Router>
				<section className="app-landing-page">
					<Landing />
					<div className="main-content" />
				</section>
			</Router>
		);
	}
}

export default App;
