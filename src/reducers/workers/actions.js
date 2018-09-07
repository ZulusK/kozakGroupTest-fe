import Types from './types';
import * as notificationsActions from '../notifications/actions';
import * as API from '../../services/api';
import { makeFormData } from '../../services/helpers/dataBuilder';
export const getAllWorkers = dispatch => {};

export const createWorker = workerData => dispatch => {
  dispatch({ type: Types.WORKER_CREATION_START });
  dispatch(notificationsActions.requestStart());

  const formData = makeFormData(workerData);
  API.createWorker(formData)
    .then(response => {
      dispatch({
        type: Types.WORKER_CREATION_SUCCESS
      });
      dispatch(notificationsActions.requestSuccess());
    })
    .catch(error => {
      dispatch({ type: Types.WORKER_CREATION_FAIL });
      dispatch(notificationsActions.requestFail(error));
    });
};
