import Types from './types';
import ImagePicker from 'react-native-image-picker';
import {
  signup as apiSignup,
  signin as apiSignin,
  getUser as apiGetUser,
  updateUser as apiUpdateUser,
  changePassword as apiChangePassword
} from '../services/api';
import { actions as notificationsActions } from '/reducers/notifications';
import * as storage from 'services/helpers/dataStorage';
import { makeFormData } from '/services/helpers/formatBusinessData';
import store from '/store';
import { throwNotification } from '../helpers/createNotification';

export const logout = () => dispatch => {
  dispatch({ type: Types.REMOVE_SESSION });
  storage.removeSession();
};

const setTokens = tokens => ({
  type: Types.SET_TOKENS,
  payload: { tokens }
});

export const setNewAccessToken = token => ({
  type: Types.SET_NEW_ACCESS_TOKEN,
  payload: { token }
});

export const bootstrap = () => dispatch => {
  dispatch({ type: Types.BOOTSTRAP_START });

  storage
    .getTokens()
    .then(data => {
      const tokens = storage.parseTokens(data);
      if (tokens !== null) {
        dispatch(setTokens(tokens));
        dispatch(getUser());
        dispatch({ type: Types.BOOTSTRAP_SUCCESS });
      } else {
        dispatch({ type: Types.BOOTSTRAP_REJECT });
        dispatch(logout());
      }
    })
    .catch(() => {
      dispatch({ type: Types.BOOTSTRAP_FAIL });
      dispatch(logout());
    });
};

export const getUser = () => dispatch => {
  dispatch({ type: Types.GET_USER_START });
  dispatch(notificationsActions.requestStart());

  apiGetUser()
    .then(response => {
      if (response) {
        storage.saveUser(response.data);
        dispatch({
          type: Types.GET_USER_SUCCESS,
          payload: { user: response.data }
        });
        dispatch(notificationsActions.requestSuccess());
      }
    })
    .catch(error => {
      dispatch({ type: Types.GET_USER_FAIL });
      dispatch(notificationsActions.requestFail(error));
      dispatch(logout());
    });
};

export const signin = userData => dispatch => {
  userData.email = userData.email.toLowerCase();

  dispatch({ type: Types.SIGN_IN_START });
  dispatch(notificationsActions.requestStart());

  apiSignin(userData)
    .then(response => {
      storage.saveSession(response.data);
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
      dispatch({ type: Types.SIGN_IN_FAIL });
      dispatch(notificationsActions.requestFail(error));
    });
};

export const signup = userData => dispatch => {
  dispatch({ type: Types.SIGN_UP_START });
  dispatch(notificationsActions.requestStart());

  const formData = makeFormData(userData);

  apiSignup(formData)
    .then(response => {
      storage.saveSession(response.data);
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
      dispatch({ type: Types.SIGN_UP_FAIL });
      dispatch(notificationsActions.requestFail(error));
    });
};

export const updateUser = () => dispatch => {
  const updatedUserInfo = store.getState().form.editProfile.values;
  const currentUserInfo = store.getState().session.user;

  let userData = {};

  for (let key of Object.keys(updatedUserInfo)) {
    if (updatedUserInfo[key]) {
      userData[key] =
        key === 'mobileNumber'
          ? `+1${updatedUserInfo[key]}`
          : updatedUserInfo[key];
    } else {
      userData[key] = currentUserInfo[key];
    }
  }

  userData = makeFormData(userData);
  dispatch(notificationsActions.requestStart);

  apiUpdateUser(currentUserInfo.id, userData)
    .then(response => {
      dispatch(notificationsActions.requestSuccess());
      dispatch({
        type: Types.UPDATE_USER_SUCCESS,
        payload: { user: response.data }
      });
      dispatch(getUser());
    })
    .catch(error => {
      dispatch(notificationsActions.requestFail(error));
    });
};

export const changePassword = () => dispatch => {
  const user = store.getState().session.user;
  const passwords = store.getState().form.changePassword.values;

  if (passwords.confirmedPassword !== passwords.newPassword) {
    throwNotification(
      'Password doesn\'t match. Please confirm your new password correctly'
    );
  } else {
    dispatch(notificationsActions.requestStart());

    apiChangePassword(
      user.id,
      user.email,
      passwords.currentPassword,
      passwords.newPassword
    )
      .then(response => {
        dispatch(notificationsActions.requestSuccess());
        dispatch({
          type: Types.CHANGE_PASSWORD_SUCCESS,
          payload: { user: response.data }
        });
      })
      .catch(error => {
        dispatch(notificationsActions.requestFail(error));
      });
  }
};

export const setAvatar = () => dispatch => {
  ImagePicker.showImagePicker(
    {
      title: 'Add Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    },
    response => {
      if (response.didCancel) {
        dispatch({ type: Types.SET_USER_AVATAR_CANCEL });
      } else if (response.error) {
        dispatch({ type: Types.SET_USER_AVATAR_FAIL });
      } else {
        dispatch({
          type: Types.SET_USER_AVATAR_SUCCESS,
          payload: {
            imageUrl: response.uri,
            imageBase64: response.data
          }
        });
      }
    }
  );
};
