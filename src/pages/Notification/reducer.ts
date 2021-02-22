import {IAction } from  "@Interfaces/common";
import ActionType from "./action-type";
import { fromJS } from 'immutable';

const initialState = fromJS({
  type:null,
  isNotification: false,
  typeNotification:"success",
  message: "",
  description:"",
});
export default (state = initialState , action: IAction) => {
  switch (action.type) {
    case ActionType.NOTIFICATION_CLOSE:
      return state
      .set('type', action.type)
      .set('isNotification', false)
      .set('typeNotification', "success")
      .set('message',"")
      .set('description',"")
    case ActionType.NOTIFICATION_SUCCESS:
      return state
      .set('type', action.type)
      .set('isNotification', true)
      .set('typeNotification', action?.payload?.typeNotification)
      .set('message', action?.payload?.message)
      .set('description', action?.payload?.description)
    default:
      return state;
  }
};
