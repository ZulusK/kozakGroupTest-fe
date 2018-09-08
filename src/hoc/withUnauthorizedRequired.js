import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as authSelectors from '../reducers/auth/selectors';
import { Redirect } from 'react-router-dom';

const withUnauthorizedRequired = WrappedComponent => {
  return class extends Component {
    render() {
      if (!this.props.isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Redirect to={{ pathname: '/' }} />;
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
  withUnauthorizedRequired
);

export default composedHoc;
