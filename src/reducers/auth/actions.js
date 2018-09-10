import Types from './types';
import * as notificationsActions from '../notifications/actions';
import * as API from '../../services/api';
import { makeFormData } from '../../services/helpers/dataBuilder';

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

export const signin = userData => dispatch => {
  userData.email = userData.email.toLowerCase();

  dispatch({ type: Types.SIGN_IN_START });
  dispatch(notificationsActions.requestStart());

  API.signin(userData)
    .then(response => {
      dispatch({
        type: Types.SIGN_IN_SUCCESS,
        payload: {
          user: response.data.user,
          tokens: response.data.tokens
        }
      });
      dispatch(notificationsActions.requestSuccess());
    })
    .catch(error => {
      dispatch(notificationsActions.requestFail(error));
    });
};

export const signup = userData => dispatch => {
  dispatch({ type: Types.SIGN_UP_START });
  dispatch(notificationsActions.requestStart());

  const formData = makeFormData(userData);
  API.signup(formData)
    .then(response => {
      dispatch({
        type: Types.SIGN_UP_SUCCESS,
        payload: {
          user: response.data.user,
          tokens: response.data.tokens
        }
      });
      dispatch(notificationsActions.requestSuccess());
    })
    .catch(error => {
      dispatch(notificationsActions.requestFail(error));
    });
};
