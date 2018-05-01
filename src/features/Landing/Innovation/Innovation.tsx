import * as React from 'react';

import Grid from '../../../components/ui/Grid';

import './style.scss';

const Innovation = () => (
	<div className="Innovation__Section">
		<div className="Heading u-wrapper">
			<Grid wrap={true}>
				<div className="Heading__item Heading__item--important">
					<b>React Typescript Boilerplate</b> is a starter project for building your next web app
					faster. Take advantage of the prebuilt components and styles that are available in the
					project.
				</div>
				<div className="Heading__item">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
			</Grid>
		</div>
	</div>
);

export default Innovation;
