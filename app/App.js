import React from 'react';
import { Route, Redirect, Switch } from 'react-router'

import Todolist from 'app/containers/Todolist';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/todolist" />} />
      <Route path="/todolist" component={Todolist} />
    </Switch>
  </div>
);

export default App;
