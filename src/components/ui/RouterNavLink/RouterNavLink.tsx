import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

import './style.scss';

export default (props: NavLinkProps) => (
	<div>
		<NavLink {...props} />
	</div>
);
