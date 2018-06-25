import React from 'react';
import { Route, Redirect, Switch } from 'react-router'

import Todolist from 'app/containers/Todolist';
import Filter from 'app/containers/Filter';
import AdminOrder from 'app/containers/AdminOrder';
import ProductGallery from 'app/containers/ProductGallery';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/todolist" />} />
      <Route path="/todolist" component={Todolist} />
      <Route path="/filter" component={Filter} />
      <Route path="/admin-order" component={AdminOrder} />
      <Route path="/product-gallery" component={ProductGallery} />
    </Switch>
  </div>
);

export default App;
