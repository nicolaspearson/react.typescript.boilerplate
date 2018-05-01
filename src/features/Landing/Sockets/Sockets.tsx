import * as React from 'react';
import ReactRotatingText from 'react-rotating-text';

import Button from '../../../components/ui/Button';
import Hexagon from '../../../components/ui/Hexagon';

import './style.scss';

export interface SocketProps {
	toggleSignUpModal?: any;
}

const Sockets = (props: SocketProps) => (
	<div className="Sockets__Section">
		<div className="Section__content u-wrapper u-ta-c">
			<div className="Project">
				<h2 className="Project__headline">
					Assemble your backend from Syncano Sockets to build your
				</h2>
				<p className="Project__title">
					<ReactRotatingText
						items={[
							' fintech innovation solution',
							' messenger bot',
							' mobile backend',
							' custom CMS',
							' analytics integration',
							' IoT backend',
							' payment gateway',
							' web hosting solution',
							'... basically, whatever...'
						]}
					/>
				</p>
			</div>

			<div className="Socket-list">
				<a
					className="Socket Socket--empty"
					href="https://docs.syncano.io/#/building-sockets/basics"
					title="Build your socket"
				>
					<i className="Socket__icon fa fa-plus" />
					<Hexagon
						width={130}
						style={{
							fill: '#111',
							strokeWidth: '2',
							stroke: '#fff',
							strokeDasharray: '5,5',
							strokeOpacity: '.5'
						}}
					/>
				</a>

				<div className="HiddenAtMd">
					<Hexagon width={64} fill="#05b470" position={{ top: '-24%', right: '-200px' }} />
					<Hexagon width={64} fill="#b4f2da" position={{ bottom: '0%', left: '-8%' }} />
				</div>
			</div>

			{/* <div className='Separator' data-after='or' />
      <Link to='/sockets'>Browse all 150 sockets</Link> */}

			<div className="HiddenAtMd">
				<Hexagon width={32} fill="#05a5b4" position={{ top: '-15px', left: '10%' }} />
				<Hexagon width={48} fill="#197eee" position={{ bottom: '15%', right: '10%' }} />
			</div>
		</div>

		<div className="CTA u-wrapper">
			<h3 className="u-title">More than 60,000 developers use Syncano NoOps</h3>
			<p className="CTA__subtitle u-subtitle">
				to accelerate and automate their software development process. <br />
				Together, let’s enable the autonomous developer.
			</p>

			<Button primary="true" onClick={props.toggleSignUpModal}>
				Get started for free
			</Button>
		</div>
	</div>
);

export default Sockets;
