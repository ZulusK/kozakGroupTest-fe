import createReducer from '../../services/helpers/createReducer';
import Types from './types';

const initialState = {
  notification: {
    message: null,
    type: null
  },
  loading: false
};

const parseError = error => {
  if (error.message) {
    return Array.isArray(error.message)
      ? error.message.map(m => m.field + ':' + m.message).join('. ')
      : JSON.stringify(error.message, null, 2);
  }
  return JSON.stringify(error, null, 2);
};

export default createReducer(initialState, {
  [Types.REQUEST_START]: (state, { payload }) => ({
    ...state,
    loading: true
  }),
  [Types.REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false
  }),
  [Types.REQUEST_FAIL]: (state, { payload }) => {
    return {
      ...state,
      notification: {
        message: parseError(payload.error),
        type: 'error'
      },
      loading: false
    };
  },
  [Types.RESET_NOTIFICATION]: (state, { payload }) => ({ ...initialState })
});
