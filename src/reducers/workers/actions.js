import Types from './types';
import * as notificationsActions from '../notifications/actions';
import * as workersSelectors from './selectors';
import * as API from '../../services/api';
import * as filterBuilder from '../../services/helpers/filterBuilder';

export const getAllWorkers = () => (dispatch, getState) => {
  dispatch(notificationsActions.requestStart());
  const state = getState();
  API.getAllWorkers({
    skip:
      workersSelectors.getLimit(state) * workersSelectors.getCurrentPage(state),
    limit: workersSelectors.getLimit(state),
    ...filterBuilder.buildForWorkers(workersSelectors.getFilters(state))
  })
    .then(response => {
      dispatch({
        type: Types.GET_WORKERS_SUCCESS,
        payload: response.data
      });
      dispatch(notificationsActions.requestSuccess());
    })
    .catch(error => {
      dispatch(notificationsActions.requestFail(error));
    });
};
export const setPageCount = pageCount => dispatch => {
  dispatch({
    type: Types.SET_WORKERS_PAGE_COUNT,
    payload: { pageCount }
  });
};
export const setCurrentPage = page => dispatch => {
  dispatch({
    type: Types.SET_CURRENT_WORKERS_PAGE,
    payload: { page }
  });
};
export const setLimit = limit => dispatch => {
  dispatch({
    type: Types.SET_CURRENT_WORKERS_LIMIT,
    payload: { limit }
  });
};
export const updateFilters = filters => dispatch => {
  dispatch({
    type: Types.UPDATE_FILTERS,
    payload: { filters }
  });
};
export const resetPagination = () => dispatch => {
  dispatch({
    type: Types.RESET_PAGINATION
  });
};
export const deleteWorker = workerId => dispatch => {
  dispatch(notificationsActions.requestStart());

  API.deleteWorker(workerId)
    .then(() => {
      dispatch(notificationsActions.requestSuccess('worker was deleted'));
      dispatch(getAllWorkers());
    })
    .catch(error => {
      dispatch(notificationsActions.requestFail(error));
    });
};

export const createWorker = workerData => dispatch => {
  dispatch({ type: Types.WORKER_CREATION_START });
  dispatch(notificationsActions.requestStart());

  // const formData = makeFormData(workerData);
  API.createWorker(workerData)
    .then(response => {
      dispatch({
        type: Types.WORKER_CREATION_SUCCESS
      });
      dispatch(notificationsActions.requestSuccess('worker was created'));
    })
    .catch(error => {
      dispatch({ type: Types.WORKER_CREATION_FAIL });
      dispatch(notificationsActions.requestFail(error));
    });
};
