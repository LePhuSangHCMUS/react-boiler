//Lib
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
//Component
import { notification } from 'antd';
//Styled Component
import './style.scss';
//Const
//Types
const Notification = () => {
  //======================Redux===================================
  //=====>Redux Action
  //=====>Redux Props
  const { notificationReducer } = useSelector((state: any) => ({
    notificationReducer: state.notificationReducer,
  }));
  //===================== Hook ==================================
  useEffect(() => {
    if (notificationReducer.get('isNotification')) {
      const state = notificationReducer;
      const typeNotification = state.get('typeNotification') as
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
        | 'warn'
        | 'open';
      notification.config({
        placement: 'bottomRight',
        bottom: 50,
        duration: 3,
        // rtl: true,
      });
      notification[typeNotification]({
        message: state.get('message'),
        description: state.get('description'),
      });
    }
  }, [notificationReducer]);

  return <></>;
};

export default Notification;
