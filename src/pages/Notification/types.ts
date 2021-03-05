import { ReactNode } from 'react';

export interface INotificationState {
  isNotification: boolean;
  typeNotification: 'success' | 'error' | 'info' | 'warning' | 'warn' | 'open';
  message?: string | ReactNode;
  description?: string | ReactNode;
}
