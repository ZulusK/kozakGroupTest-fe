import createReducer from '../../services/helpers/createReducer';
import Types from './types';

const initialState = {
  workers: [],
  selectedWorker: null
};

export default createReducer(initialState, {
  [Types.GET_WORKERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    workers: payload.workers
  }),
  [Types.SELECT_WORKER]: (state, { payload }) => ({
    ...state,
    selectedWorker: payload.worker
  }),
  [Types.RESET_SELECTED_WORKER]: (state, {}) => ({
    ...state,
    selectedWorker: null
  })
});
