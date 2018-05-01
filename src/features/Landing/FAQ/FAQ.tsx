import * as React from 'react';

import Testimonials from '../../../components/shared/Testimonials';
import Link from '../../../components/ui/RouterLink';

import './style.scss';

const FAQ = () => (
	<div className="FAQ__Section">
		<Testimonials />

		<div className="Section__content u-wrapper">
			<div className="FAQ-list">
				<div className="FAQ">
					<h4 className="FAQ__title">Question 1?</h4>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
				</div>
				<div className="FAQ">
					<h4 className="FAQ__title">Question 2?</h4>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
				</div>
				<div className="FAQ">
					<h4 className="FAQ__title">Question 3?</h4>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
				</div>
				<div className="FAQ">
					<h4 className="FAQ__title">Question 4?</h4>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
				</div>
				<div className="FAQ">
					<h4 className="FAQ__title">Question 5?</h4>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
						sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
						voluptatem sequi nesciunt.
					</p>
				</div>
				<div className="FAQ">
					<h4 className="FAQ__title">How can I get support?</h4>
					<p>
						You can join our <Link to="/slack-invite">Slack channel</Link> for community support, or
						simply <a href="mailto:hello@react.typescript.boilerplate.com">send us an email</a>. You
						can also browse through our <a href="https://www.google.com">documentation</a>.
					</p>
				</div>
			</div>
			<div className="CTA">
				<a href="https://www.google.com">Read the docs</a>,{' '}
				<a href="mailto:hello@react.typescript.boilerplate.com">ask your own question</a> or join
				our <Link to="/slack-invite">Slack channel</Link> to get instant answers.
			</div>
		</div>
	</div>
);

export default FAQ;
