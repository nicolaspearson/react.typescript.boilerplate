import * as React from 'react';

import Button from '../../ui/Button';
import Hexagon from '../../ui/Hexagon';

import './style.scss';

export interface CTAProps {
	toggleSignUpModal?: () => {};
}

const CTA = (props: CTAProps) => (
	<div className="CTA__Section u-wrapper u-ta-c">
		<h3 className="u-title">Ready to get started?</h3>
		<p className="u-subtitle">Try Syncano for free for 30 days. No credit card required.</p>

		<div className="Split">
			<Button primary="true" onClick={props.toggleSignUpModal}>
				Start free trial
			</Button>
		</div>

		<div className="HiddenAtSm">
			<Hexagon
				width={100}
				fill="#b4f1d9"
				position={{ top: '-80px', left: '-60px' }}
				opacity=".25"
			/>
			<Hexagon width={24} fill="#60e0ae" position={{ top: '0px', left: '150px' }} />
			<Hexagon width={42} fill="#b4f1d9" position={{ top: '-70px', left: '23%' }} />
			<Hexagon width={32} fill="#05a5b4" position={{ top: '90px', left: '18%' }} />
			<Hexagon width={32} fill="#b4f1d9" position={{ top: '-140px', right: '45%' }} opacity=".5" />
			<Hexagon width={24} fill="#60e0ae" position={{ top: '-70px', right: '20%' }} />
			<Hexagon width={42} fill="#b4f2da" position={{ top: '-40px', right: '16%' }} />
			<Hexagon width={64} fill="#b4f1d9" position={{ top: '-140px', right: '6%' }} opacity=".5" />
			<Hexagon width={24} fill="#05a5b4" position={{ bottom: '20px', right: '5%' }} />
			<Hexagon width={14} fill="#60e0ae" position={{ bottom: '-95px', left: '41%' }} />
			<Hexagon
				width={32}
				fill="#b4f1d9"
				position={{ bottom: '-120px', left: '44%' }}
				opacity=".5"
			/>
			<Hexagon width={24} fill="#60e0ae" position={{ bottom: '-90px', right: '40%' }} />
		</div>
	</div>
);

// CTA.init = ({
// 	services: {
// 		ui: { toggleModal }
// 	}
// }) => ({
// 	toggleSignUpModal: (e) => {
// 		window.analytics.track('Sign up Website');
// 		toggleModal('signup');
// 	}
// });

export default CTA;
