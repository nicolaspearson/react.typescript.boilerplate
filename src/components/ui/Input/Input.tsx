import * as React from 'react';

import './style.scss';

export interface IconProps {
	icon: string;
}

const Input = ({ full, white, clearable, handleClear, ...props }: any) => (
	<div
		className={`
      Input
      ${full ? 'Input--full' : ''}
      ${white ? 'Input--white' : ''}
    `}
	>
		<input {...props} />

		{clearable &&
			props.value && <span className="Input__clear fa fa-times" onClick={handleClear} />}
	</div>
);

export default Input;
