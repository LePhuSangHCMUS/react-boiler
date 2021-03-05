import { combineReducers } from 'redux';
import loginReducer from '@Pages/Login/reducer';
import notificationReducer from '@Pages/Notification/reducer';
export default combineReducers({
  loginReducer: loginReducer,
  notificationReducer: notificationReducer,
});
