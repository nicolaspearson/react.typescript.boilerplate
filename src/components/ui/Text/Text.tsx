import * as React from 'react';

import './style.scss';

export interface TextProps {
	children: any;
}

const Text = (props: TextProps) => <div>{props.children}</div>;

export default Text;
