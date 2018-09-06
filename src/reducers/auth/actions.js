import Types from './types';
import * as API from '../../services/api';

export const logout = () => dispatch => {
  dispatch({ type: Types.REMOVE_SESSION });
};

const setTokens = tokens => ({
  type: Types.SET_TOKENS,
  payload: { tokens }
});

export const setNewAccessToken = token => ({
  type: Types.SET_NEW_ACCESS_TOKEN,
  payload: { token }
});

export const signin = ({ email, password }) => ({});
