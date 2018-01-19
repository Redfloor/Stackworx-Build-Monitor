import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Head from './components/head';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Skull/>, document.getElementById('skull'));
registerServiceWorker();
