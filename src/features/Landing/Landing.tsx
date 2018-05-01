import * as React from 'react';

import CTA from '../../components/shared/CTA';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import Button from '../../components/ui/Button';
import Head from '../../components/ui/Head';
import Page from '../../components/ui/Page';
import FAQ from './FAQ';
import Features from './Features';
import Innovation from './Innovation';
import Sockets from './Sockets';

import './style.scss';

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
			<Page>
				<Head>
					<title>React Typescript Boilerplate</title>
					<meta name="Description" content="React Starter Project" />
				</Head>

				<Header theme="dark">
					<div className="CTA">
						<h1 className="Title">This template was built using React and Typescript</h1>
						<h2 className="Subtitle">
							It comes with tons of useful features to kickstart your next project
						</h2>

						<Button primary="true" onClick={this.handleViewSourceCodeClick}>
							View Source Code
						</Button>
					</div>
				</Header>

				<Innovation />
				<Features />
				<Sockets />
				<FAQ />
				<CTA onCtaClick={this.handleViewSourceCodeClick} />
				<Footer />
			</Page>
		);
	}
}

export default Landing;
