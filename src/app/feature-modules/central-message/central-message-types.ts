import {InjectionToken} from '@angular/core';

export enum MessageType {
  ERROR = 'ERROR',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS'
}
export interface IMessage {
  type: MessageType;
  description: string;
}

export interface MessageLogger {
  logMessage(message: IMessage): void;
}
export const MESSAGE_LOGGERS = new InjectionToken<MessageLogger[]>('Logic for logging message to console');
