import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as sessionReducer } from './session';
import { reducer as workersReducer } from './workers';
import { reducer as notificationsReducer } from './notifications';
export default combineReducers({
  form: formReducer,
  session: sessionReducer,
  workers: workersReducer,
  notifications: notificationsReducer
});
