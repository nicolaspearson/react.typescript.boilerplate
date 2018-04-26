import * as React from 'react';

import Grid from '../../../components/ui/Grid';
import Hexagon from '../../../components/ui/Hexagon';
import Link from '../../../components/ui/RouterLink';

import './style.scss';

const Features = () => (
	<div className="Features__Section u-wrapper">
		<Hexagon width={32} fill="#05A5B4" position={{ top: '20px', right: '-20px' }} />

		<div className="Section__header u-ta-c">
			<h2 className="u-title">
				At Syncano, we want to help you build technology that matters, faster
			</h2>
			<p className="u-subtitle">
				Syncano’s Serverless Platform and SDKs automatically assemble and deploy your backend to the
				cloud instantaneously - all while you build your app.
			</p>
		</div>

		<div className="Section__content">
			<Grid wrap={true}>
				<div className="Heading">
					<p className="Heading__item Heading__item--important">
						Use Syncano to experiment and test your product with real users on a live production
						platform until you achieve product/market fit. Get results faster than with any other
						solution. Adapt, tweak and deploy at blazing speed.
					</p>
					<p className="Heading__item">
						Take the risk and friction out of application development. As you grow, Syncano grows
						with you - Syncano’s infrastructure will automatically scale to support your needs.
					</p>
				</div>
				<div className="Feature-list">
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#RegistriesSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Syncano Registry</h4>
								<p>
									Don’t rebuild what has already been built. The registry is your toolbox of
									reusable backend code.
								</p>
							</div>
						</Link>
					</div>
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#AutomationSDKSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Syncano Automation SDK</h4>
								<p>
									Operate your backend directly from your local development environment. No, weird
									GUIs, no hassle, more efficiency!
								</p>
							</div>
						</Link>
					</div>
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#CommunitySection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Syncano Community</h4>
								<p>
									Crowd + Cloud. Harness the power of our community, and give yourself more creative
									freedom. Share, build, collaborate.
								</p>
							</div>
						</Link>
					</div>
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#CloudOsSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Syncano Cloud OS</h4>
								<p>
									Throw any Socket from the Registry into the Syncano Cloud OS, and its
									functionality becomes immediately available.
								</p>
							</div>
						</Link>
					</div>
				</div>
			</Grid>
		</div>
	</div>
);

export default Features;
