import * as React from 'react';

import Grid from '../../../components/ui/Grid';
import Link from '../../../components/ui/RouterLink';

import './style.scss';

const Features = () => (
	<div className="Features__Section u-wrapper">
		<div className="Section__header u-ta-c">
			<h2 className="u-title">Get a head start building something that matters, faster</h2>
			<p className="u-subtitle">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</div>

		<div className="Section__content">
			<Grid wrap={true}>
				<div className="Heading">
					<p className="Heading__item Heading__item--important">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
					<p className="Heading__item">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<div className="Feature-list">
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#FirstFeatureSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">First Feature</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</Link>
					</div>
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#SecondFeatureSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Second Feature</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</Link>
					</div>
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#ThirdFeatureSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Third Feature</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
							</div>
						</Link>
					</div>
					<div className="Feature">
						<Link
							to={{
								pathname: '/features',
								hash: '#FourthFeatureSection'
							}}
						>
							<div className="Feature__inner">
								<div className="Feature__icon fa fa-star" />
								<h4 className="Feature__title">Fourth Feature</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
