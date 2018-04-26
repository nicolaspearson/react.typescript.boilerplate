import * as React from 'react';

import Hexagon from '../../ui/Hexagon';

import './style.scss';

const Testimonials = () => (
	<div className="Testimonials__Section u-wrapper">
		<Hexagon width={64} fill="#05b470" position={{ top: '-22px', left: '-50px' }} />
		<Hexagon width={42} fill="#b4f2da" position={{ bottom: '-35px', left: '-40px' }} />

		<div className="Testimonial-list">
			<blockquote className="Testimonial">
				<div className="HiddenAtSm">
					<Hexagon width={32} fill="#60e0ae" position={{ bottom: '-15px', right: '20px' }} />
				</div>

				<div className="Testimonial__inner">
					<p className="Testimonial__content">
						Syncano is among the most mature in the serverless space.
					</p>
					<footer>
						<div className="Testimonial__author">The News Stack</div>
						<a
							href="https://thenewstack.io/tns-guide-serverless-technologies-best-frameworks-platforms-tools/"
							className="Testimonial__author-about"
						>
							TNS Guide to Serverless technologies
						</a>
					</footer>
				</div>
			</blockquote>
			<blockquote className="Testimonial">
				<div className="Testimonial__inner">
					<p className="Testimonial__content">
						We chose to work with Syncano to create MVPs faster, and to increase the speed of
						experimentation with Fintech.
					</p>
					<footer>
						<div className="Testimonial__author">Halvor Lande</div>
						<div className="Testimonial__author-about">CDO, DNB ASA</div>
					</footer>
				</div>
			</blockquote>
			<blockquote className="Testimonial">
				<Hexagon width={42} fill="#60e0ae" position={{ top: '-25px', right: '15px' }} />
				<Hexagon width={32} fill="#b4f2da" position={{ bottom: '-45px', right: '20px' }} />

				<div className="Testimonial__inner">
					<p className="Testimonial__content">
						If Syncano was around at the time we started working on our MVP, it would have saved us
						a full year to reach product market-fit.
					</p>
					<footer>
						<div className="Testimonial__author">Ståle Husby</div>
						<div className="Testimonial__author-about">CEO, Relink</div>
					</footer>
				</div>
			</blockquote>
			<blockquote className="Testimonial">
				<Hexagon width={52} fill="#b4f2da" position={{ bottom: '-35px', right: '20px' }} />

				<div className="Testimonial__inner">
					<p className="Testimonial__content">
						Syncano helps the startups in our Fintech and Insurtech accelerator programs to reach
						product market fit faster.
					</p>
					<footer>
						<div className="Testimonial__author">Ingar S. Bentzen</div>
						<div className="Testimonial__author-about">CEO, The Factory</div>
					</footer>
				</div>
			</blockquote>
		</div>
	</div>
);

export default Testimonials;
