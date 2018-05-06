import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router1 from './components/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router1 />, document.getElementById('root'));
registerServiceWorker();
