import * as React from 'react';

import './style.scss';

import Nav from '../../ui/Nav';
import Link from '../../ui/RouterLink';

export interface SiteNavProps {
	isOpen: boolean;
	theme: string;
	toggleSignIn: () => {};
	closeNav: () => {};
}

// tslint:disable jsx-boolean-value
const SiteNav = (props: SiteNavProps) => (
	<div
		className={`Site-nav t-${props.theme} ${props.isOpen ? 'is-open' : undefined}`}
		onClick={props.closeNav}
	>
		<div className="Site-nav__inner">
			<Nav>
				<div>
					<Link to="/features">
						<span className="Site-nav__item">Product</span>
					</Link>
					<div className="Dropdown">
						<Nav stack>
							<a href="">First</a>
							<a href="">Second</a>
							<a href="">Third</a>
							<a href="">Fourth</a>
						</Nav>
					</div>
				</div>
				<Link to="/sockets">
					<span className="Site-nav__item">Sockets</span>
				</Link>
				<Link to="/pricing">
					<span className="Site-nav__item">Plans &amp; Pricing</span>
				</Link>
				<Link to="/enterprise">
					<span className="Site-nav__item">Enterprise</span>
				</Link>
				<div className="Site-nav__social">
					<a href="https://github.com/nicolaspearson/react.material.boilerplate">
						<i className="fa fa-github" />
					</a>
					<Link to="/slack-invite">
						<i className="fa fa-slack" />
					</Link>
				</div>
			</Nav>
		</div>
	</div>
);

export default SiteNav;
