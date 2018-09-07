import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as authSelectors from '../reducers/auth/selectors';
import { Redirect } from 'react-router-dom';

const withAuthRequired = WrappedComponent => {
  return class extends Component {
    render() {
      if (this.props.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to={{ pathname: '/login' }} />;
      }
    }
  };
};

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state)
});

const composedHoc = compose(
  connect(mapStateToProps),
  withAuthRequired
);

export default composedHoc;
