import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import './css/index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

