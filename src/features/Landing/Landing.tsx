import * as React from 'react';

import './style.scss';

import Header from '../../components/shared/Header';
import Button from '../../components/ui/Button';
import Head from '../../components/ui/Head';

export interface LandingProps {
	toggleSignUpModal?: () => {};
}

class Landing extends React.Component {
	constructor(props: LandingProps, context?: any) {
		super(props, context);
		this.handleViewSourceCodeClick = this.handleViewSourceCodeClick.bind(this);
	}

	public handleViewSourceCodeClick() {
		window.location.href = 'https://github.com/nicolaspearson/react.material.boilerplate';
	}

	public render() {
		return (
			<section>
				<Head>
					<title>React Material Boilerplate</title>
					<meta name="Description" content="Material Design Template" />
				</Head>

				<Header theme="dark">
					<div className="CTA">
						<h1 className="Title">
							React Material Boilerplate is a helpful template built with Google's Material Design
							guidelines in mind
						</h1>
						<h2 className="Subtitle">
							It comes with tons of useful features to kickstart your next project
						</h2>

						<Button primary="true" onClick={this.handleViewSourceCodeClick}>
							View Source Code
						</Button>
					</div>
				</Header>
			</section>
		);
	}
}

// Landing.init = ({
//   services: {ui: {toggleModal}}
// }) => ({
//   toggleSignUpModal: e => {
//     window.analytics.track('Sign up Website')
//     toggleModal('signup')
//   }
// })

export default Landing;
