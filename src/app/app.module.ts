import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CentralMessageModule} from './feature-modules/central-message/central-message.module';
import {CentralMessageComponent} from './feature-modules/central-message/central-message.component';
import {IMessage, MESSAGE_LOGGERS, MessageLogger} from './feature-modules/central-message/central-message-types';


class MessageConsoleLogger implements MessageLogger {
  logMessage(message: IMessage): void {
    console.log('My custom console logger', message);
  }

}

class MessageServerLogger implements MessageLogger {
  constructor() {
  }

  logMessage(message: IMessage): void {
    // this.http.post('url', message); // Send log to server
    console.log('Send log to server', message);
  }

}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CentralMessageModule
  ],
  providers: [
    {
      provide: MESSAGE_LOGGERS,
      useClass: MessageConsoleLogger,
      multi: true
    },
    {
      provide: MESSAGE_LOGGERS,
      useClass: MessageServerLogger,
      multi: true
    }
  ],
  bootstrap: [AppComponent, CentralMessageComponent]
})
export class AppModule {
}
