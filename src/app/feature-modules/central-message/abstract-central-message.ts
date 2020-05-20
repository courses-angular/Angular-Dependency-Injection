import {BehaviorSubject, Observable} from 'rxjs';
import {IMessage} from './central-message-types';

export abstract class AbstractCentralMessage {
  protected messages: BehaviorSubject<IMessage[]> = new BehaviorSubject<IMessage[]>([]);
  protected messageState: IMessage[] = [];

  readonly messages$: Observable<IMessage[]> = this.messages.asObservable();

  abstract setMessage(message: IMessage): void;
  abstract removeMessage(message: IMessage): void;
}
