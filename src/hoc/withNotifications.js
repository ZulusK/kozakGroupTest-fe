import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  selectors as notificationsSelectors,
  actions as notificationsActions
} from '../reducers/notifications';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/scss/main.scss';

const withNotifications = WrappedComponent => {
  return class WithNotifications extends Component {
    state = {
      isLoading: false
    };
    createNotification = (type, msg) => {
      if (!msg) {
        return;
      }
      switch (type) {
        case 'error':
        case 'info':
          toast.error(msg, {
            position: toast.POSITION.TOP_CENTER
          });
        default:
          break;
      }
    };

    componentDidUpdate(prevProps) {
      if (this.props.notification !== prevProps.notification) {
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
          <ToastContainer autoClose={2000} />
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

let composedHoc = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withNotifications
);
export default composedHoc;
