import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory as history} from 'react-router';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router routes={routes} history = {history}/>, document.getElementById('root'));
registerServiceWorker();
