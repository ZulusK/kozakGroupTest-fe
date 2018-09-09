import Types from './types';
import * as notificationsActions from '../notifications/actions';
import * as API from '../../services/api';
import { makeFormData } from '../../services/helpers/dataBuilder';

export const getAllWorkers = () => dispatch => {
  dispatch(notificationsActions.requestStart());
  API.getAllWorkers()
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
