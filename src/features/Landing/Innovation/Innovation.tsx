import * as React from 'react';

import Grid from '../../../components/ui/Grid';

import './style.scss';

const Innovation = () => (
	<div className="Innovation__Section">
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

		{/* <div className="Section__header u-wrapper u-ta-c">
			<h2 className="u-title">Speed of innovation matters</h2>
			<p className="u-subtitle">Go build something amazing!</p>
		</div>

		<div className="Video u-wrapper">
			<div className="Video__inner" />
		</div> */}
	</div>
);

export default Innovation;
