import * as React from 'react';

export interface ButtonProps {
	props: any;
}

const Button = (
	props: ButtonProps,
	children: any,
	primary: any,
	secondary: any,
	outline: any,
	github: any,
	google: any,
	facebook: any,
	full: any,
	square: any
) => {
	return (
		<button
			className={`
    Button
    ${primary ? 'Button--primary' : ''}
    ${secondary ? 'Button--secondary' : ''}
    ${outline ? 'Button--outline' : ''}
    ${github ? 'Button--github' : ''}
    ${google ? 'Button--google' : ''}
    ${facebook ? 'Button--facebook' : ''}
    ${full ? 'Button--full' : ''}
    ${square ? 'Button--square' : ''}
  `}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
