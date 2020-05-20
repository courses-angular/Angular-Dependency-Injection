import {AbstractCentralMessage} from './feature-modules/central-message/abstract-central-message';
import {IMessage} from './feature-modules/central-message/central-message-types';

export class CustomMessageService extends AbstractCentralMessage {
  removeMessage(message: IMessage): void {
    alert('Remove Message');
  }

  setMessage(message: IMessage): void {
    alert('Set message');
  }
}
