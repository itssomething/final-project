import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import questionPage from './component/questionPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route>
    <Route path="/" component={App}/>
    <Route path="/collections/:id" component={questionPage} />
  </Route>
);