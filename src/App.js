import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import routes from './routes';
import 'bulma/bulma.sass';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import './scss/App.scss';
import store from './store';

const persistor = persistStore(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
