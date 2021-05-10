import { combineReducers } from 'redux';
//Common
import notificationReducer from "@Reduxs/Notification/reducer"
import refreshDataReducer from "@Reduxs/RefreshData/reducer";
//Individual
import loginReducer from "@Reduxs/Login/reducer"

export default combineReducers({
    loginReducer: loginReducer,
    notificationReducer:notificationReducer,
    refreshDataReducer:refreshDataReducer
})