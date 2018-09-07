import createReducer from '../../services/helpers/createReducer';
import Types from './types';

const initialState = {
  notification: {
    message: null,
    type: null
  },
  loading: false
};

export default createReducer(initialState, {
  [Types.REQUEST_START]: (state, { payload }) => ({
    ...state,
    loading: true
  }),
  [Types.REQUEST_SUCCESS]: (state, { payload }) => ({
    ...state,
    notification: {
      message: 'Ok',
      type: 'success'
    },
    loading: false
  }),
  [Types.REQUEST_FAIL]: (state, { payload }) => {
    console.log('here');
    return {
      ...state,
      notification: {
        ...payload.error,
        type: 'error'
      },
      loading: false
    };
  },
  [Types.RESET_NOTIFICATION]: (state, { payload }) => ({ ...initialState })
});
