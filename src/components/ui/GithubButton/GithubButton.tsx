import * as React from 'react';
import GitHubButton from 'react-github-button';

import './style.scss';

export default (props: any) => (
	<span>
		<GitHubButton {...props} />
	</span>
);
