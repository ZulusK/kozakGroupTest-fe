import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import './scss/App.scss';
import routes from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
