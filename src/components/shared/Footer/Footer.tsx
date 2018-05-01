import * as React from 'react';

import Grid from '../../ui/Grid';
import Nav from '../../ui/Nav';
import Link from '../../ui/RouterLink';

import './style.scss';

const Footer = () => (
	<footer className="Footer u-wrapper">
		<div className="Navigation">
			<Grid wrap={true}>
				<div className="Navigation__column">
					<h5 className="Navigation__head">Company</h5>
					<Nav stack={true}>
						<Link to="/terms-of-service">
							<span className="Navigation__link">Terms of Service</span>
						</Link>
						<Link to="/privacy-policy">
							<span className="Navigation__link">Privacy Policy</span>
						</Link>
					</Nav>
				</div>

				<div className="Navigation__column">
					<h5 className="Navigation__head">Product</h5>
					<Nav stack={true}>
						<Link to="/features">
							<span className="Navigation__link">Features</span>
						</Link>
						<Link to="/pricing">
							<span className="Navigation__link">Plans &amp; Pricing</span>
						</Link>
					</Nav>
				</div>

				<div className="Navigation__column Navigation__resources">
					<h5 className="Navigation__head">Resources</h5>
					<Nav stack={true}>
						<a className="Navigation__link">Documentation</a>
						<a className="Navigation__link">Blog</a>
						<a className="Navigation__link">Libraries</a>
					</Nav>
				</div>

				<div className="Navigation__column Navigation__column--split">
					<h5 className="Navigation__head">Connect</h5>
					<Nav stack={true}>
						<a className="Navigation__link" href="https://twitter.com">
							Twitter
						</a>
						<a className="Navigation__link" href="https://github.com">
							Github
						</a>
						<a className="Navigation__link" href="https://www.facebook.com">
							Facebook
						</a>
						<a className="Navigation__link" href="https://www.linkedin.com">
							LinkedIn
						</a>
						<a className="Navigation__link" href="https://dribbble.com">
							Dribbble
						</a>
						<a className="Navigation__link" href="mailto:hello@react.typescript.boilerplate.com">
							Contact us
						</a>
					</Nav>
				</div>
			</Grid>
		</div>

		<div className="Copyrights">&copy; 2018 by Company. All rights reserved.</div>
	</footer>
);

export default Footer;
