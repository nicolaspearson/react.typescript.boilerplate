import * as React from 'react';

import Grid from '../../ui/Grid';
import Hexagon from '../../ui/Hexagon';
import Nav from '../../ui/Nav';
import Link from '../../ui/RouterLink';

import './style.scss';

const Footer = () => (
	<footer className="Footer u-wrapper">
		<div className="HiddenAtSm">
			<Hexagon width={18} fill="#05a5b4" position={{ bottom: '90px', left: '-40px' }} />
			<Hexagon width={48} fill="#b4f1d9" position={{ bottom: '90px', right: '15%' }} />
			<Hexagon width={78} fill="#b4f1d9" position={{ bottom: '-20px', left: '20%' }} opacity=".5" />
			<Hexagon width={32} fill="#b4f1d9" position={{ top: '40px', right: '-5%' }} />
			<Hexagon width={32} fill="#05a5b4" position={{ bottom: '-20px', right: '-8%' }} />
		</div>

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
						<Link to="/syncano-performance-insights">
							<span className="Navigation__link">Privacy Shield</span>
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
						<a className="Navigation__link" href="http://status.syncano.com/">
							Help &amp; Status
						</a>
					</Nav>
				</div>
				<div className="Navigation__column Navigation__resources">
					<h5 className="Navigation__head">Resources</h5>
					<Nav stack={true}>
						<a className="Navigation__link" href="https://docs.syncano.io/#/">
							Documentation
						</a>
						<a className="Navigation__link" href="https://blog.syncano.io/">
							Blog
						</a>
						<a
							className="Navigation__link"
							href="https://docs.syncano.io/#/client-lib-reference/installation"
						>
							Libraries
						</a>
					</Nav>
				</div>
				{/* <div className='Navigation__column'>
          <h5 className='Navigation__head'>For developers</h5>
          <Nav stack>
            <a className='Navigation__link' href='#'>iOS developers</a>
            <a className='Navigation__link' href='#'>Android developers</a>
            <a className='Navigation__link' href='#'>Web developers</a>
            <a className='Navigation__link' href='#'>React developers</a>
          </Nav>
        </div> */}
				{/* <div className='Navigation__column'>
          <h5 className='Navigation__head'>More</h5>
          <Nav stack>
            <a className='Navigation__link' href='#'>For Investors</a>
            <a className='Navigation__link' href='#'>For Enterprise</a>
            <a className='Navigation__link' href='#'>Our team</a>
            <a className='Navigation__link' href='#'>Case studies</a>
          </Nav>
        </div> */}
				<div className="Navigation__column Navigation__column--split">
					<h5 className="Navigation__head">Connect</h5>
					<Nav stack={true}>
						<a className="Navigation__link" href="https://twitter.com/Syncano/">
							Twitter
						</a>
						<a className="Navigation__link" href="https://github.com/Syncano/">
							Github
						</a>
						<a className="Navigation__link" href="https://www.facebook.com/syncano/">
							Facebook
						</a>
						<a className="Navigation__link" href="https://www.linkedin.com/company/syncano/">
							LinkedIn
						</a>
						<a className="Navigation__link" href="https://dribbble.com/syncano">
							Dribbble
						</a>
						<a className="Navigation__link" href="mailto:hello@syncano.com">
							Contact us
						</a>
					</Nav>
				</div>
			</Grid>
		</div>

		<div className="Copyrights">&copy; 2017 by Syncano. All rights reserved.</div>
	</footer>
);

export default Footer;
