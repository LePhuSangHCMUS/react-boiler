import {IAction } from  "@Interfaces/common";
import ActionType from "./action-type";
import { fromJS } from 'immutable';

const initialState = fromJS({
  type:null,
  isLoading: false,
  isFetched:false,
  payload: null,
  error: null,
});
export default (state = initialState , action: IAction) => {
  switch (action.type) {
    case ActionType.LOGIN_START:
      return state
      .set("type",fromJS(action.type))
      .set('isLoading', true)
      .set('isFetched', false)
      .set('payload', null)
      .set('error', null)
    case ActionType.LOGIN_SUCCESS:
      return state
      .set("type",fromJS(action.type))
      .set('isLoading', false)
      .set('isFetched', true)
      .set('payload', fromJS(action.payload))
      .set('error', null)
    case ActionType.LOGIN_FAIL:
      return state
      .set("type",fromJS(action.type))
      .set('isLoading', false)
      .set('isFetched', false)
      .set('payload',null)
      .set('error', fromJS(action.error))
    default:
      return state;
  }
};
