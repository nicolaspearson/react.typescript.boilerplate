import * as React from 'react';

import Nav from '../../ui/Nav';
import Link from '../../ui/RouterLink';

import './style.scss';

export interface SiteNavProps {
	isOpen?: boolean;
	theme?: string;
	closeNav?: () => {};
}

const SiteNav = (props: SiteNavProps) => (
	<div
		className={`Site-nav t-${props.theme} ${props.isOpen ? 'is-open' : ''}`}
		onClick={props.closeNav}
	>
		<div className="Site-nav__inner">
			<Nav>
				<Link to="/">
					<span className="Site-nav__item">Home</span>
				</Link>

				<Link to="/features">
					<span className="Site-nav__item">Features</span>
				</Link>

				<Link to="/about">
					<span className="Site-nav__item">About</span>
				</Link>

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
