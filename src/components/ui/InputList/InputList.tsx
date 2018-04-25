import * as React from 'react';

import './style.scss';

export interface InputListProps {
	children: any;
	errors: any;
}

const InputList = (props: InputListProps) => {
	if (!props.errors) {
		props.errors = {};
	}
	const errorKeys = Object.keys(props.errors);
	const matchedErrors = React.Children.map(props.children, (input: any) => input.props.name);
	const unmatchedErrors = errorKeys.filter((err) => matchedErrors.indexOf(err) < 0);

	return (
		<div>
			{React.Children.map(props.children, (input: any) => (
				<div className="InputWrap" key={input.props.name}>
					{input}

					{props.errors[input.props.name] && (
						<div className="InputWrap__error">{props.errors[input.props.name]}</div>
					)}
				</div>
			))}

			{unmatchedErrors.map((err) => (
				<div className="InputWrap__error" key={err}>
					{props.errors[err]}
				</div>
			))}
		</div>
	);
};

export default InputList;
