import * as React from 'react';

import './style.scss';

export interface NavProps {
	children: any;
	stack: any;
}

const Nav = (props: NavProps) => (
	<div>
		<ul className={`nav ${props.stack ? 'nav--stack' : ''}`}>
			{React.Children.map(props.children, (Item) => <li>{Item}</li>)}
		</ul>
	</div>
);

export default Nav;
