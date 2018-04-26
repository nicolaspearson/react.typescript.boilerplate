import * as React from 'react';

import Logo from '../../ui/Logo';
import Link from '../../ui/RouterLink';
import SiteNav from '../SiteNav';

import './style.scss';

export interface HeaderProps {
	title?: string;
	subtitle?: string;
	theme?: string;
	toggleNav?: () => {};
	toggleSignUp?: () => {};
	toggleSignIn?: () => {};
	flags?: any;
	pageStatus?: any;
	closeNav?: () => {};
	before?: any;
	children?: any;
}

const Header = (props: HeaderProps) => {
	if (!props.theme) {
		props.theme = 'light';
	}
	return (
		<div className={`Header t-${props.theme}`}>
			<div className="Header__inner u-wrapper">
				<div className="Header__bar">
					<Link to="/">
						<span className="Header__logo">
							<Logo />
						</span>
					</Link>

					<span onClick={props.toggleNav} hidden={true} className="Header__nav-toggle fa fa-bars" />

					<SiteNav
						theme={props.theme}
						toggleSignIn={props.toggleSignIn}
						isOpen={props.flags && props.flags.has('site-nav.open')}
						closeNav={props.closeNav}
					/>
				</div>

				{props.title && (
					<div className="PageHead">
						{props.before}

						<h1 className="PageHead__title">{props.title}</h1>
						<h2 className="PageHead__subtitle">{props.subtitle}</h2>
					</div>
				)}

				{props.children}
			</div>
		</div>
	);
};

export default Header;
