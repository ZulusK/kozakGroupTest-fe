import React from 'react';
import { Route } from 'react-router-dom';

const RouterWithNesterRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default RouterWithNesterRoutes;
