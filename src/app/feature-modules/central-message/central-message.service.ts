import {Inject, Injectable, Optional} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Message} from '@angular/compiler/src/i18n/i18n_ast';
import {IMessage, MESSAGE_LOGGERS, MessageLogger} from './central-message-types';

@Injectable({
  providedIn: 'root'
})
export class CentralMessageService {
  private messages: BehaviorSubject<IMessage[]>;
  private messageState: IMessage[];

  readonly messages$: Observable<IMessage[]>;

  constructor(@Inject(MESSAGE_LOGGERS) @Optional() private loggers: MessageLogger[]) {
    this.messages = new BehaviorSubject<IMessage[]>([]);
    this.messageState = [];
    this.messages$ = this.messages.asObservable();
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
