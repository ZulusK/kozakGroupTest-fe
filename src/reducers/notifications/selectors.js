import { createSelector } from 'reselect';

const notifications = state => state.notifications;

export const notification = createSelector(
  notifications,
  notificationsState => notificationsState.notification
);

export const loading = createSelector(
  notifications,
  notificationsState => notificationsState.loading
);
