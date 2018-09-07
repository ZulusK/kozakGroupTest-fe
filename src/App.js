import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import 'bulma/bulma.sass';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import './scss/App.scss';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
