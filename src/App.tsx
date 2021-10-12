import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Screens from './pages';
import { CNRoutes } from './hoc';
function App() {
  return (
    <Router forceRefresh={true}>
      {/* <Header /> */}
      <Switch>
        <CNRoutes header exact path="/" component={Screens.Landing} />
        <CNRoutes
          header
          exact
          path="/leaderboard"
          component={Screens.Leaderboard}
        />
        <CNRoutes exact path="/register" component={Screens.Register} />
        <CNRoutes exact path="/login" component={Screens.Login} />
        <CNRoutes
          exact
          path="/dashboard"
          header
          component={Screens.Dashboard}
        />
        <CNRoutes
          exact
          path="/reset-password"
          component={Screens.ResetPassword}
        />
      </Switch>
    </Router>
  );
}

export default App;
