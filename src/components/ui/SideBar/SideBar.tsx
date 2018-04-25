import * as React from 'react';

import './style.scss';

export interface SideBarProps {
	children: any;
}

const SideBar = (props: SideBarProps) => <div className="Sidebar">{props.children}</div>;

export default SideBar;
