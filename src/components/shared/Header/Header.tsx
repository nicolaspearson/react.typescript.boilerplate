import * as React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../redux/reducers/state';

import { Flag } from '../../../models/flag';
import { FlagActions } from '../../../redux/actions/FlagActions';

import Logo from '../../ui/Logo';
import Link from '../../ui/RouterLink';
import SiteNav from '../SiteNav';

import './style.scss';

export interface HeaderProps {
	title?: string;
	subtitle?: string;
	theme?: string;
	toggleNav?: () => {};
	flags?: any;
	closeNav?: () => {};
	before?: any;
	children?: any;
	onToggleNav?: (flags: Flag[]) => {};
}

// tslint:disable jsx-no-lambda
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

					<div className="Header__nav-toggle">
						<span
							onClick={() =>
								props.onToggleNav ? props.onToggleNav(props.flags ? props.flags : []) : ''
							}
							className="fa fa-bars"
						/>
					</div>

					<SiteNav
						theme={props.theme}
						isOpen={props.flags && props.flags.some((flag: Flag) => flag.name === 'site-nav.open')}
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

const mapStateToProps = (state: RootState, ownProps: HeaderProps) => {
	return {
		flags: state.flags,
		...ownProps
	};
};

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
	return {
		onToggleNav: (flags: Flag[]) => {
			if (flags.some((flag: Flag) => flag.name === 'site-nav.open')) {
				dispatch(FlagActions.deleteFlag('site-nav.open'));
			} else {
				const newFlag: Flag = new Flag();
				newFlag.name = 'site-nav.open';
				dispatch(FlagActions.addFlag(newFlag));
			}
		},
		closeNav: () => dispatch(FlagActions.deleteFlag('site-nav.open'))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
