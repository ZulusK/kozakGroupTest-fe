import { createSelector } from 'reselect'

export const getSession = state => state.session
export const getTokens = createSelector([getSession], session => session.tokens)
export const getUser = createSelector([getSession], session => session.user)
export const getUserId = createSelector([getUser], user => user.id)
export const getIsAuthenticated = createSelector(
  [getUser, getTokens],
  (user, tokens) => tokens.access !== null && tokens.refresh !== null && user !== null,
)
