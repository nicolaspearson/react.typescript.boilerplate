import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer } from 'react-router-redux';

import { createBrowserHistory } from 'history';
import { RootState } from './redux/reducers';
import { configureStore } from './redux/store';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';
import 'sanitize.css/sanitize.css';
import 'typeface-roboto';

// Import CSS reset and Global Styles
import 'styles/theme.scss';

// Prepare the store
const history = createBrowserHistory();
const initialState: RootState = {
	flags: [],
	router: routerReducer
};
const store = configureStore(history, initialState);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
