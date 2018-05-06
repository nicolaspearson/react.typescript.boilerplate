import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { createBrowserHistory } from 'history';
import { configureStore } from './redux/store';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';
import 'sanitize.css/sanitize.css';
import 'typeface-roboto';

// Import CSS reset and Global Styles
import 'styles/theme.scss';

// Prepare the store
const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root') as HTMLElement
);

registerServiceWorker();
