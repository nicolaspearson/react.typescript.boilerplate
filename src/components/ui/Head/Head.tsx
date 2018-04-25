import * as React from 'react';

import Head from '../../shared/Head';

const isDesktop = window.innerWidth > 768;
const robotoFontLink = (
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
);
const ptMonoFontLink = (
	<link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet" />
);

export default ({ children }: any) => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		{children}
		{isDesktop && ptMonoFontLink}
		{isDesktop && robotoFontLink}
		{React.Children.map(children, (item: any) => {
			if (item.type === 'title') {
				const title = item.props.children;
				const page = title.indexOf('-') >= 0 ? title.split('-')[1] : title;
				console.log(`Page: ${page}`);
			}
		})}
	</Head>
);
