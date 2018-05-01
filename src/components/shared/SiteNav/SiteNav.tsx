import * as React from 'react';

import Nav from '../../ui/Nav';
import Link from '../../ui/RouterLink';

import './style.scss';

export interface SiteNavProps {
	isOpen?: boolean;
	theme?: string;
	toggleSignUp?: () => {};
	closeNav?: () => {};
}

const SiteNav = (props: SiteNavProps) => (
	<div
		className={`Site-nav t-${props.theme} ${props.isOpen ? 'is-open' : ''}`}
		onClick={props.closeNav}
	>
		<div className="Site-nav__inner">
			<Nav>
				<div>
					<Link to="/">
						<span className="Site-nav__item">Home</span>
					</Link>
					<Link to="/features">
						<span className="Site-nav__item">Features</span>
					</Link>
					<div className="Dropdown">
						<Nav stack={true}>
							<a href="">First Feature</a>
							<a href="">Second Feature</a>
							<a href="">Third Feature</a>
							<a href="">Fourth Feature</a>
						</Nav>
					</div>
					<Link to="/about">
						<span className="Site-nav__item">About</span>
					</Link>
				</div>
				<div className="Site-nav__social">
					<a href="https://github.com/nicolaspearson/react.material.boilerplate">
						<i className="fa fa-github" />
					</a>
				</div>

				<a className="Site-nav__item Site-nav__item--login" onClick={props.toggleSignUp}>
					Sign up<i className="fa fa-arrow-right" />
				</a>
			</Nav>
		</div>
	</div>
);

export default SiteNav;
