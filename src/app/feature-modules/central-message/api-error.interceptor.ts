import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CentralMessageService} from './central-message.service';
import {MessageType} from './central-message-types';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor(private centralMessageService: CentralMessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        this.centralMessageService.setMessage({
         type: MessageType.ERROR,
          description: error.statusText
        });
        return of(error);
      })
    );
  }
}

