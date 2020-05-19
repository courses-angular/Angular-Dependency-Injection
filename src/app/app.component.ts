import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CentralMessageService} from './feature-modules/central-message/central-message.service';
import {MessageType} from './feature-modules/central-message/central-message-types';

@Component({
  selector: 'yl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dependency-injection';

  constructor(private http: HttpClient, private centralMessageService: CentralMessageService) {
  }

  generateError(code: number) {
    this.http.get(`https://httpstat.us/${code}?sleep=2000`)
      .subscribe(status => console.log(status));

    if (code === 200) {
      this.centralMessageService.setMessage({
        type: MessageType.SUCCESS,
        description: 'Yes!!!'
      });
    }
  }
}
