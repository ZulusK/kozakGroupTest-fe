import { API_URL } from '../config';

const API_PATH = '/api';

export default {
  USERS_SIGNUP: `${API_URL}${API_PATH}/users`,
  USERS_SIGNIN: `${API_URL}${API_PATH}/auth/login`,
  GET_USER: `${API_URL}${API_PATH}/auth/login`,
  UPDATE_USER: userId => `${API_URL}${API_PATH}/users/${userId}`,
  CHANGE_PASSWORD: userId => `${API_URL}${API_PATH}/users/${userId}/password`,

  CHECK_REFRESH: `${API_URL}${API_PATH}/auth/check-refresh`,
  CHECK_ACCESS: `${API_URL}${API_PATH}/auth/check-access`,
  GET_ACCESS_TOKEN: `${API_URL}${API_PATH}/auth/token`,

  GET_WORKERS: `${API_URL}${API_PATH}/workers`,
  POST_WORKER: `${API_URL}${API_PATH}/workers`,
  DELETE_WORKER: workerId => `${API_URL}${API_PATH}/workers/${workerId}`,
  UPDATE_WORKER: workerId => `${API_URL}${API_PATH}/workers/${workerId}`,
  LIST_WORKERS: `${API_URL}${API_PATH}/workers`
};
