import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';
import 'sanitize.css/sanitize.css';
import 'typeface-roboto';

// Import CSS reset and Global Styles
import 'styles/theme.scss';

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
