import * as React from 'react';

import CTA from '../../components/shared/CTA';
import Footer from '../../components/shared/Footer';
import Header from '../../components/shared/Header';
import Button from '../../components/ui/Button';
import Head from '../../components/ui/Head';
import Hexagon from '../../components/ui/Hexagon';
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

						<div className="CLI">
							<div className="CLI__inner">
								<div className="HiddenAtSm">
									<Hexagon width={32} fill="#7C51CD" position={{ top: '-13px', right: '60px' }} />
									<Hexagon width={54} fill="#197eee" position={{ top: '25%', right: '-27px' }} />
									<Hexagon
										width={64}
										fill="#05b470"
										position={{ bottom: '-18px', right: '35px' }}
									/>
									<Hexagon
										width={32}
										fill="#60e0ae"
										position={{ bottom: '-22px', right: '-17px' }}
									/>
									<Hexagon width={64} fill="#60e0ae" position={{ bottom: '-40px', left: '10%' }} />
									<Hexagon width={42} fill="#05a5b4" position={{ bottom: '10%', left: '-21px' }} />
								</div>
								<div className="HiddenAtMd">
									<Hexagon width={22} fill="#3cdd9e" position={{ bottom: '-45px', left: '22%' }} />
									<Hexagon width={40} fill="#60e0ae" position={{ bottom: '-70px', right: '30%' }} />
								</div>
							</div>
						</div>
					</div>
				</Header>

				<Innovation />
				<Features />
				<Sockets />
				<FAQ />
				<CTA />
				<Footer />
			</Page>
		);
	}
}

export default Landing;
