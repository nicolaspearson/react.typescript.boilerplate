import * as React from 'react';

import Button from '../../ui/Button';

import './style.scss';

export interface CTAProps {
	onCtaClick?: () => void;
}

const CTA = (props: CTAProps) => (
	<div className="CTA__Section u-wrapper u-ta-c">
		<h3 className="u-title">Ready to get started?</h3>
		<p className="u-subtitle">Try the template for free now.</p>

		<div className="Split">
			<Button primary="true" onClick={props.onCtaClick}>
				View Source Code
			</Button>
		</div>
	</div>
);

export default CTA;
