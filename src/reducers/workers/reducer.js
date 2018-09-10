import createReducer from '../../services/helpers/createReducer';
import Types from './types';
import _ from 'lodash';
const initialState = {
  workers: [],
  filters: {
    fullname: '',
    position: ''
  },
  pagination: {
    limit: 10,
    page: 0,
    pageCount: 1
  },
  selectedWorker: null
};

export default createReducer(initialState, {
  [Types.GET_WORKERS_SUCCESS]: (state, { payload }) => ({
    ...state,
    workers: payload.docs,
    pagination: {
      pageCount: Math.ceil(payload.total / payload.limit),
      page: Math.ceil(payload.offset / payload.limit),
      limit: payload.limit
    }
  }),
  [Types.SELECT_WORKER]: (state, { payload }) => ({
    ...state,
    selectedWorker: payload.worker
  }),
  [Types.RESET_SELECTED_WORKER]: (state, {}) => ({
    ...state,
    selectedWorker: null
  }),
  [Types.SET_CURRENT_WORKERS_PAGE]: (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      page: payload.page
    }
  }),
  [Types.SET_WORKERS_PAGE_COUNT]: (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      pageCount: payload.pageCount
    }
  }),
  [Types.SET_CURRENT_WORKERS_LIMIT]: (state, { payload }) => ({
    ...state,
    pagination: {
      ...state.pagination,
      limit: payload.limit
    }
  }),
  [Types.UPDATE_FILTERS]: (state, { payload }) => ({
    ...state,
    filters: payload.filters
  }),
  [Types.RESET_FILTERS]: state => ({
    ...state,
    filters: initialState.filters
  }),
  [Types.RESET_WORKERS_PAGINATION]: (state, { payload }) => ({
    ...state,
    pagination: initialState.pagination
  })
});
