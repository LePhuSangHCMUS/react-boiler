import ActionType from './action-type';
import { INotificationState } from './types';
export const notificationClose = () => ({
  type: ActionType.NOTIFICATION_CLOSE,
  payload: null,
  error: null,
});
export const notificationSuccess = (result: INotificationState) => ({
  type: ActionType.NOTIFICATION_SUCCESS,
  payload: result,
  error: null,
});

export const notificationAction = (result: INotificationState) => {
  return async (dispatch: any) => {
    //Start

    //Success
    dispatch(notificationSuccess(result));
    dispatch(notificationClose());
  };
};
