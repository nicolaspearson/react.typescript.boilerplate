import * as React from 'react';

import './style.scss';

export interface GridProps {
	children?: any;
	wrap?: any;
}

const Grid = (props: GridProps) => (
	<div className={`Grid ${props.wrap ? 'Grid--wrap' : ''} `}>{props.children}</div>
);

export default Grid;
