import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as authReducer } from './auth';
import { reducer as workersReducer } from './workers';
import { reducer as notificationsReducer } from './notifications';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  workers: workersReducer,
  notifications: notificationsReducer
});
