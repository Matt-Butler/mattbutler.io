import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterConfig from './RouterConfig';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(RouterConfig),
  document.getElementById('root')
);
registerServiceWorker();
