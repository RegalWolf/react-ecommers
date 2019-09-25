import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';

const hats = () => (
  <div>
    Hats
  </div>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={hats} />
    </Switch>
  </BrowserRouter>
)

export default App;
