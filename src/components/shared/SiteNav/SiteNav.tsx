import * as React from 'react';

import './style.scss';

import Nav from '../../ui/Nav';
import Link from '../../ui/RouterLink';

export interface SiteNavProps {
	isOpen?: boolean;
	theme?: string;
	toggleSignIn?: () => {};
	closeNav?: () => {};
}

const SiteNav = (props: SiteNavProps) => (
	<div
		className={`Site-nav t-${props.theme} ${props.isOpen ? 'is-open' : undefined}`}
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
							<a href="">First</a>
							<a href="">Second</a>
							<a href="">Third</a>
							<a href="">Fourth</a>
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
			</Nav>
		</div>
	</div>
);

export default SiteNav;
