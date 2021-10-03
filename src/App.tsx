import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Screens from './pages';

function App() {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route
          exact
          path="/leaderboard"
          component={Screens.Leaderboard}
        ></Route>
        <Route exact path="/" component={Screens.Landing}></Route>
      </Switch>
    </Router>
  );
}

export default App;
