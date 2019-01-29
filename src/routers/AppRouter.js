import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainPage from '../components/MainPage.tsx';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
