import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import { startCoinFetch } from './actions/coinsData';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

store.dispatch(startCoinFetch()).then(() => {
  renderApp();
});

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
