import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login';
import Browse from './Browse';
import Home from './Home';
import '../css/App.css';

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/browse" component={Browse} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
        </Switch>
      </Router>
  )
}

export default App
