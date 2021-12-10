import React from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as Screens from './pages';
import CNRoutes from './hoc/CNRoutes';

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <CNRoutes header exact path="/" component={Screens.Landing} />
        <CNRoutes header exact path="/rules" component={Screens.Rules} />
        <CNRoutes
          header
          exact
          path="/leaderboard"
          component={Screens.Leaderboard}
        />
        {/* <CNRoutes
          clearForm={false}
          exact
          path="/register"
          footer={false}
          component={Screens.Register}
        /> */}
        <CNRoutes
          exact
          footer={false}
          path="/login"
          component={Screens.Login}
        />
        <CNRoutes
          exact
          path="/dashboard"
          header
          component={Screens.Dashboard}
          isProtected
          protectLevel={-1}
        />
        <CNRoutes
          exact
          path="/reset-password"
          footer={false}
          component={Screens.ResetPassword}
        />
        <CNRoutes
          exact
          isProtected
          header
          path="/edit-profile"
          component={Screens.Profile}
        />
        <CNRoutes
          exact
          footer={false}
          isProtected
          path="/logout"
          component={Screens.Logout}
        />
        <CNRoutes
          exact
          footer={false}
          path="/write-ups"
          header
          component={Screens.WriteUps}
        />

        <CNRoutes exact header path="*" component={Screens.Landing} />
      </Switch>
    </Router>
  );
}

export default App;
