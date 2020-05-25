import { AuthService } from 'src/app/core/auth.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      // if the error is due to unauthorized attempt to connect, then user is logged off
      if ([401 , 403].indexOf(err.status) !== -1){
        this.auth.logout();
      }
      //otherwise the error is managed differently
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
