import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './style.scss';

const RouterLink = (props: LinkProps) => {
	return (
		<span>
			<Link {...props} />{' '}
		</span>
	);
};

export default RouterLink;
