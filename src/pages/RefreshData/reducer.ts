import {IAction } from  "@Interfaces/common";
import ActionType from "./action-type";
import { fromJS } from 'immutable';

const initialState = fromJS({
  type:null,
  time: "",
});
export default (state = initialState , action: any) => {
  switch (action.type) {
    case ActionType.REFRESH_DATA_SUCCESS:
      return state
      .set('type', action?.payload?.type)
      .set('time', action?.payload?.time)
    default:
      return state;
  }
};
