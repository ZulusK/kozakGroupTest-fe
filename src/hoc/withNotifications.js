import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectors as notificationsSelectors,
  actions as notificationsActions
} from '../reducers/notifications';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

const withNotifications = WrappedComponent => {
  return class extends Component {
    createNotification = (type, msg) => {
      return () => {
        switch (type) {
          case 'info':
            NotificationManager.info(msg, 3000);
            break;
          case 'success':
            NotificationManager.success(msg, 'Title here', 3000);
            break;
          case 'warning':
            NotificationManager.warning(msg, 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error(msg, 'Click me!', 5000);
            break;
        }
      };
    };
    state = {
      isLoading: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.notification) {
        this.createNotification('error', this.props.notification);
      }

      if (this.props.loading !== prevProps.loading) {
        this._onToggleLoadingState();
      }
    }

    _onToggleLoadingState = () => {
      this.setState({ isLoading: this.props.loading });
    };

    render() {
      return (
        <div>
          <NotificationContainer />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

const mapStateToProps = state => ({
  notification: notificationsSelectors.notification(state),
  loading: notificationsSelectors.loading(state)
});

const mapDispatchToProps = dispatch => ({
  requestStart: () => dispatch(notificationsActions.requestStart()),
  requestSuccess: () => dispatch(notificationsActions.requestSuccess()),
  requestFail: error => dispatch(notificationsActions.requestFail(error))
});

const composedHoc = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNotifications
);
export default composedHoc;
