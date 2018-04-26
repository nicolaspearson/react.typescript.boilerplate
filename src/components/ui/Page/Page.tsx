import * as React from 'react';

import ScrollManager from '../../ui/ScrollManager';

import './style.scss';

export interface PageProps {
	children?: any;
	flags?: any;
}

const Page = (props: PageProps) => (
	<div>
		{props.children}
		{/* <DevTools /> */}
		<ScrollManager />
		{/* <Modals> */}
	</div>
);

export default Page;
