import {NotificationType} from '../types/notification-type.enum';

export interface Notification {
  content: string;
  type: NotificationType;
}
