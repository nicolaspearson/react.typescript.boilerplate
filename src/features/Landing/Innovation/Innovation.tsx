import * as React from 'react';

import Grid from '../../../components/ui/Grid';
import Hexagon from '../../../components/ui/Hexagon';

import './style.scss';

const Innovation = () => (
	<div className="Innovation__Section">
		<Hexagon width={64} fill="#b4f1d9" position={{ top: '-50px', left: '-32px' }} />

		<div className="Section__inner u-wrapper HiddenAtMd">
			<Hexagon width={32} fill="#b4f1d9" position={{ top: '-30px', right: '0' }} />
			<Hexagon width={64} fill="#b4f2da" position={{ top: '50px', left: '0' }} />
		</div>

		<div className="Heading u-wrapper">
			<Grid wrap={true}>
				<div className="Heading__item Heading__item--important">
					<b>React Boilerplate</b> is a development platform for building more, faster by leveraging
					existing backend code. Developers can finally spend their time solving app specific
					challenges.
				</div>
				<div className="Heading__item">
					Technology transforms the unthinkable into reality. The Pacemaker saves millions from the
					grief of loss. There’s still abundant untapped opportunity to change the world through the
					apps you build.
				</div>
			</Grid>
		</div>

		<div className="Section__header u-wrapper u-ta-c">
			<h2 className="u-title">Speed of innovation matters</h2>
			<p className="u-subtitle">Go build something amazing!</p>
		</div>

		<div className="Video u-wrapper">
			<div className="Video__inner" />

			<div className="HiddenAtSm">
				<Hexagon width={64} fill="#b4f2da" position={{ bottom: '-30px', left: '15%' }} />
				<Hexagon width={32} fill="#b4f2da" position={{ bottom: '-60px', left: '25%' }} />
			</div>
		</div>
	</div>
);

export default Innovation;
