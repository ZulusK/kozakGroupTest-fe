import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectors as notificationsSelectors,
  actions as notificationsActions
} from '../reducers/notifications';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

const withNotifications = WrappedComponent => {
  return class extends Component {
    state = {
      isLoading: false
    };
    createNotification = (type, msg) => {
      if (!msg) {return;}
      switch (type) {
        case 'info':
          NotificationManager.info(msg, 'Info', 3000);
          break;
        case 'success':
          NotificationManager.success(msg, 'Success', 3000);
          break;
        case 'warning':
          NotificationManager.warning(msg, 'Warning', 3000);
          break;
        case 'error':
        default:
          NotificationManager.error(msg, 'Error!', 5000);
          break;
      }
    };

    componentDidUpdate(prevProps) {
      if (this.props.notification) {
        this.createNotification(
          this.props.notification.type || 'error',
          this.props.notification.message
        );
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
          <h1>{this.state.isLoading}</h1>
          <WrappedComponent {...this.props} />
          <NotificationContainer />
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
