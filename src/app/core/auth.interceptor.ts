import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // get token from local storage
        const currentUser = this.authService.currentUser;
        const accessToken  = this.authService.getAccessToken();
        const isLoggedIn = currentUser && accessToken;
        const isApiUrl = req.url.startsWith(environment.apiURL);

        if ( isLoggedIn && isApiUrl){
          // adds the token to the headers if request is geared toward the back end
          req = req.clone({
              setHeaders: {
                  Authorization: accessToken
              }
          });
        }
        return next.handle(req);
    }
}
