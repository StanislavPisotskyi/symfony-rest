import React, { Component } from 'react';
import Table from './Table';
import PageNotFound from './PageNotFound';
import { Router, Route, IndexRoute, browserHistory, IndexRedirect } from 'react-router';

export default class App extends Component
{
  render()
  {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Table}>
            <IndexRedirect to="/posts"/>
          </Route>
          <Route path="/posts" component={Table}/>
          <Route path="*" component={PageNotFound}/>
        </Router>
    );
  }
}
