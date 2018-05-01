import * as React from 'react';

import Testimonials from '../../../components/shared/Testimonials';
import Link from '../../../components/ui/RouterLink';

import './style.scss';

const FAQ = () => (
	<div className="FAQ__Section">
		<Testimonials />

		<div className="Section__content u-wrapper">
			<div className="FAQ-list" >
				<div className='FAQ'>
					<h4 className='FAQ__title'>How is Syncano different from other cloud backend products?</h4>
					<p>Syncano has been created with developers in mind; built for engineers by engineers. During the development of the latest version, we carefully listened to the feedback and learned our lessons. The outcome is a tool that seamlessly integrates with your workflow and takes it to the next level. With Syncano, working with the backend feels like http://locallhost.</p>
				</div>
				<div className='FAQ'>
					<h4 className='FAQ__title'>How does your pricing model work?</h4>
					<p>Operations on Syncano are based on the number of API calls and the time it takes to execute the backend script code inside of the sockets you use. We have monthly pricing plans that include a fixed amount of API calls and script execution time. The basic plan of USD 25 includes 1 million API calls and 270k script seconds, which should usually cover around 1000 daily users making several requests through your frontend.</p>
					</div>
				<div className='FAQ'>
					<h4 className='FAQ__title'>What happens if I exceed my usage?</h4>
					<p>Your application will continue to work without any interruptions, regardless of the usage of the backend. If you exceed your usage, overage fees will appear as a separate bill at the end of the month, which is our billing period. You can change your plan at any time and set limits to notify you in the event of getting close to exceeding your current plan.</p>
				</div>
				<div className='FAQ'>
					<h4 className='FAQ__title'>What will happen if my app gets popular and attracts millions of users?</h4>
					<p>Will be as excited as you! You don’t need to worry about scaling issues, as our infrastructure will scale along with the load of your users. We have a proven track record of handling millions of API requests daily.</p>
				</div>
				<div className='FAQ'>
					<h4 className='FAQ__title'>Where are the libraries for iOS and Android?</h4>
						<p>Syncano is currently in beta and we provide a client library for JavaScript. We are also working on the iOS, Android and Unity libraries and they will be released very soon. <Link to='/slack-invite'>Ask us on Slack</Link> to get the ETAs.</p>
				</div>
				<div className='FAQ'>
					<h4 className='FAQ__title'>How can I get support?</h4>
					<p>You can join our <Link to='/slack-invite'>Slack channel</Link> for community support, talk to us via the messenger in the <a href={process.env.DASHBOARD_URL}>Dashboard</a> after you log in, or simply <a href='mailto:hello@syncano.io'>send us an email</a>. You can also browse through our <a href='https://docs.syncano.io/#/'>documentation</a>.</p>
				</div>
			</div>
			<div className="CTA">
				<a href="https://docs.syncano.io/#/">Read the docs</a>,{' '}
				<a href="mailto:hello@syncano.com">ask your own question</a> or join our{' '}
				<Link to="/slack-invite">Slack channel</Link> to get instant answers.
			</div>
		</div>
	</div>
);

export default FAQ;
