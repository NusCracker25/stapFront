import { NGXLogger } from 'ngx-logger';
import { environment } from '@environments/environment';
import { User } from './model/user';
import { Injectable } from '@angular/core';
// import element for Http connection with backend
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
// import Rxjs for promises management
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import the User definition

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = environment.apiURL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentUser: User;
  authToken = '';

  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private logger: NGXLogger
  ) { }

  /**
   * support registration of new user
   * @param user - a new candidate user to register in the system
   */
  register(user: User): Observable<any> {
    const url = this.API_URL + '/users/register';
    return this.httpClient.post(url, user).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * logs the user in and generate the token which is locally stored
   * @param user the object as created from the login form (username or email and password)
   */
  login(user: User) {
    // works out the object to be used for request to comply with expected structure {'username':'username', password:'password'}
    this.logger.info('authenticate with ', user);
    const userR = {
      username: user.username,
      password: user.password
    };
    // finer understanding of observable is required to document what is to be done in services
    const url = this.API_URL + '/users/authenticate';
    return this.httpClient.post<any>(url, userR)
      .subscribe((res: any) => {
        if (res.sucess){
          this.logger.info('User is authenticated ', res.user.username);
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.currentUser = res.user;
          this.router.navigate(['/user/profile/']);
        } else{
          this.logger.error('Authentication failed');
          this.router.navigate(['/user/login']); // then navigate back to login page which will be reloaded
        }
      });
  }

   /**
    * provides the access token (as a method to later support more complex logic if need be)
    */
  getAccessToken(){
    return localStorage.getItem('access_token');
  }

  /**
   * informs on actual logged status based on token storage
   * TODO: this one should be an observable to which one subscribes
   *  there are too many calls to this function see trace with disable console.log
   */
  isLoggedIn(): boolean {
    //  console.log('checks if logged in');
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null ) ? true : false;
  }

  /**
   * logs out the user
   */
  logout(){
    // localStorage.clear(); // clears all local storage
    if ( localStorage.removeItem('access_token') == null && localStorage.removeItem('user') == null){
      this.currentUser = null;
      this.router.navigate(['users/login']);
    }
    // miss an else statement here...
  }

  getUserProfile(  ): Observable<any> {
    const url = this.API_URL + '/users/profile'; // address for the request is still to be extended with the proper id parameter
    // extension with the id of the user is not mandatory as the interceptor adds the JWT
    // token to the request. back end fetches the request properly
    return this.httpClient.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || { };
      }),
      catchError(this.handleError)
    );
  }

  /**
   *
   * @param error the error intercepted
   */
  handleError(error: HttpErrorResponse){
    let msg = '';
    if ( error.error instanceof ErrorEvent){
      // error is a client side one
      msg = error.error.message;
    }else {
      // error is then a server side one
      msg = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(msg);
  }

//////////////////////////////////////////////////

  loadToken() {
    const token = localStorage.getItem('acess_token');
    this.authToken = token;
  }

}
