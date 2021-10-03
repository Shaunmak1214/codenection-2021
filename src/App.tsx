import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as Screens from './pages';
import { Header } from './components/organisms';
function App() {
    return (
        <Router forceRefresh={true}>
            <Header />
            <Switch>
                <Route exact path="/" component={Screens.Landing}></Route>
            </Switch>
        </Router>
    );
}

export default App;
