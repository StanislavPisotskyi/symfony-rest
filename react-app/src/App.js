import React, { Component } from 'react';
import Table from './Table';
import Create from './Create';
import Update from './Update';
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
          <Route path="/posts/create" component={Create}/>
          <Route path="/posts/update/:postId" component={Update}/>
          <Route path="*" component={PageNotFound}/>
        </Router>
    );
  }
}
