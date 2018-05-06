import * as React from 'react';

import CTA from '../../components/shared/CTA';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import Head from '../../components/ui/Head';
import Page from '../../components/ui/Page';

import './style.scss';

export interface AboutProps {
	pageTitle?: string;
}

class About extends React.Component {
	constructor(props: AboutProps, context?: any) {
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
						<h1 className="Title">About this boilerplate</h1>
						<h2 className="Subtitle">
							On this page you can explain more about the project, and add contact details, etc.
						</h2>
					</div>
				</Header>

				<CTA onCtaClick={this.handleViewSourceCodeClick} />
				<Footer />
			</Page>
		);
	}
}

export default About;
