import ActionType from './action-type';
import {IUserProfile} from "@Interfaces/user"
import {ILoginCredentials} from "@Interfaces/credentials"
import {userApi} from "../../api/user.api";
//Special : 
import {notificationAction} from "@Pages/Notification/action"
import typesNotification from "@Pages/Notification/const"
export const loginStart = () => ({
  type: ActionType.LOGIN_START,
  payload:null,
  error:null
});
export const loginSuccess = (result:IUserProfile) => ({
  type: ActionType.LOGIN_START,
  payload:result,
  error:null
});
export const loginFail = (error:Error) => ({
  type: ActionType.LOGIN_FAIL,
  payload:null,
  error:error
});

export const loginAction=(credentials:ILoginCredentials)=>{
  return async (dispatch:any)=>{
    //Start
    dispatch(loginStart());
    try{
      const result=await userApi.loginUser(credentials);
       //Success
      dispatch(loginSuccess(result));
      dispatch(notificationAction({
        isNotification:true,
        typeNotification:typesNotification.SUCCESS as "success",
        message:"Thành Công",
        description:"Đăng Nhập Thành Công"

      }))
     
    }catch(Error){
      //FAIL
      dispatch(loginFail(Error));
      dispatch(notificationAction({
        isNotification:true,
        typeNotification:typesNotification.ERROR as "error",
        message:"Lỗi",
        description:"Đăng nhập thất bại"

      }))
     
    }
  }
}
