import * as React from 'react';

import './style.scss';

export interface NavProps {
	children: any;
	wrap: any;
}

const Nav = (props: NavProps) => (
	<div className={`Grid ${props.wrap ? 'Grid--wrap' : ''} `}>{props.children}</div>
);

export default Nav;
