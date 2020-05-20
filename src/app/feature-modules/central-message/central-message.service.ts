import {Inject, Injectable, Optional} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {IMessage, MESSAGE_LOGGERS, MessageLogger} from './central-message-types';
import {AbstractCentralMessage} from './abstract-central-message';

@Injectable({
  providedIn: 'root'
})
export class CentralMessageService extends AbstractCentralMessage{


  constructor(@Inject(MESSAGE_LOGGERS) @Optional() private loggers: MessageLogger[]) {
    super();
  }

  public setMessage(message: IMessage): void {
    this.messageState.push(message);
    this.messages.next([...this.messageState]);

    if (this.loggers && this.loggers.length > 0) {
      this.loggers.forEach((logger) => {
        logger.logMessage(message);
      });
    }
  }

  public removeMessage(message: IMessage): void {
    const index = this.messageState.indexOf(message);
    this.messageState.splice(index, 1);
    this.messages.next([...this.messageState]);


  }
}
