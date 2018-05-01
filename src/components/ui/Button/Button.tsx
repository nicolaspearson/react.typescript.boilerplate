import * as React from 'react';

import './style.scss';

// The string props should be booleans but receive a console warning
export interface ButtonProps {
	children?: any;
	primary?: string;
	secondary?: string;
	outline?: string;
	github?: string;
	google?: string;
	facebook?: string;
	full?: string;
	square?: string;
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
