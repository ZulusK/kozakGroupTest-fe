import { createSelector } from 'reselect';

export const getAuth = state => state.auth;
export const getTokens = createSelector([getAuth], auth => auth.tokens);
export const getUser = createSelector([getAuth], auth => auth.user);
export const getUserId = createSelector([getUser], user => user.id);
export const getIsAuthenticated = createSelector(
  [getUser, getTokens],
  (user, tokens) =>
    tokens.access !== null && tokens.refresh !== null && user !== null
);
