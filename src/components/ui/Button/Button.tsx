import * as React from 'react';

import './style.scss';

export interface ButtonProps {
	children?: any;
	primary?: any;
	secondary?: any;
	outline?: any;
	github?: any;
	google?: any;
	facebook?: any;
	full?: any;
	square?: any;
	onClick?: () => void;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			className={`
    Button
    ${props.primary ? 'Button--primary' : ''}
    ${props.secondary ? 'Button--secondary' : ''}
    ${props.outline ? 'Button--outline' : ''}
    ${props.github ? 'Button--github' : ''}
    ${props.google ? 'Button--google' : ''}
    ${props.facebook ? 'Button--facebook' : ''}
    ${props.full ? 'Button--full' : ''}
    ${props.square ? 'Button--square' : ''}
  `}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
