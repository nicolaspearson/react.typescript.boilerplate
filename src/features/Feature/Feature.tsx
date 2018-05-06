import * as React from 'react';

import CTA from '../../components/shared/CTA';
import Features from '../../components/shared/Features';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import Head from '../../components/ui/Head';
import Page from '../../components/ui/Page';

import './style.scss';

export interface FeatureProps {
	pageTitle?: string;
}

class Feature extends React.Component {
	constructor(props: FeatureProps, context?: any) {
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
						<h1 className="Title">Features of this boilerplate</h1>
						<h2 className="Subtitle">
							On this page you can describe some of the features of the project.
						</h2>
					</div>
				</Header>

				<Features />

				<CTA onCtaClick={this.handleViewSourceCodeClick} />
				<Footer />
			</Page>
		);
	}
}

export default Feature;
