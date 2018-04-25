import * as React from 'react';

class ScrollManager extends React.Component {
	public componentDidMount() {
		const isLocal = window.location.hostname === 'localhost';
		if (!isLocal) {
			window.scrollTo(0, 0);
		}
	}

	public render() {
		return undefined;
	}
}

export default ScrollManager;
