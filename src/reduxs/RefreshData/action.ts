import ActionType from './action-type';
import {IRefreshState} from "@Interfaces/refreshData"

export const refreshDataSuccess = (result:IRefreshState) => ({
  type: ActionType.REFRESH_DATA_SUCCESS,
  payload:result,  
});

export const refreshDataAction=(result:IRefreshState)=>{
  return async (dispatch:any)=>{
    //Success
    dispatch(refreshDataSuccess(result));

  }
}
