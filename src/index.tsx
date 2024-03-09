import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';

import './index.scss';

import App from './blocks/App/App';

declare global {
  interface Window { createContributions: any }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
