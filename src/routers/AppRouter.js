import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainPage from '../components/MainPage.tsx';
import NotFoundPage from '../components/NotFoundPage';
import FetchErrorPage from '../components/FetchErrorPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/error" component={FetchErrorPage} />
        <Route path="/" component={MainPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
