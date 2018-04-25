import * as React from 'react';

import './style.scss';

export interface MenuProps {
	children: any;
}
const Menu = (props: MenuProps) => (
	<ul className="Menu">
		{React.Children.map(props.children, (item) => <li className="Menu__item">{item}</li>)}
	</ul>
);

export default Menu;
