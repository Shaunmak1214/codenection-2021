import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Screens from './pages';
import { CNRoutes } from './hoc';
function App() {
  return (
    <Router forceRefresh={true}>
      {/* <Header /> */}
      <Switch>
        <CNRoutes header exact path="/" component={Screens.Landing}></CNRoutes>
        <CNRoutes
          header
          exact
          path="/leaderboard"
          component={Screens.Leaderboard}
        ></CNRoutes>
        <CNRoutes
          exact
          path="/register"
          component={Screens.Register}
        ></CNRoutes>
      </Switch>
    </Router>
  );
}

export default App;
