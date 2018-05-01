import * as React from 'react';
import ReactRotatingText from 'react-rotating-text';

import Button from '../../../components/ui/Button';

import './style.scss';

export interface SocketProps {
	onCtaClick?: () => void;
}

const Hero = (props: SocketProps) => (
	<div className="Hero__Section">
		<div className="Section__content u-wrapper u-ta-c">
			<div className="Project">
				<h2 className="Project__headline">Start building your next project</h2>
				<p className="Project__title">
					<ReactRotatingText
						items={[
							' Responsive Web App',
							' Messenger Bot',
							' Custom CMS',
							'... basically, whatever...'
						]}
					/>
				</p>
			</div>
		</div>

		<div className="CTA u-wrapper">
			<h3 className="u-title">Lorem ipsum dolor sit amet</h3>
			<p className="CTA__subtitle u-subtitle">
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
			</p>

			<Button primary="true" onClick={props.onCtaClick}>
				Get started now
			</Button>
		</div>
	</div>
);

export default Hero;
