import { Task } from './model/task';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /**
   * configuration for server access
  */
  API_URL = environment.tasks.url + ':' + environment.tasks.port ;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  /* task list*/
  taskList: Task [];
  count = -1;

  /**
   *
   * @param httpClient
   * @param router
   * @param logger
   */
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private logger: NGXLogger
  ) { }

  /**
   * fetch to api for adding a task
   * @param task
   */
  addTask(task: Task): Observable<Task> {
    const url = this.API_URL + '/stap-tasks';
    return this.httpClient.post<Task>(url, task).pipe(
      catchError(this.handleError)
    );
  }

  getTasks(  ): Observable<Task[]> {
    const url = this.API_URL + '/stap-tasks'; // address for the request is still to be extended with the proper id parameter
    // extension with the id of the user is not mandatory as the interceptor adds the JWT
    // token to the request. back end fetches the request properly
    return this.httpClient.get<Task[]>(url, { headers: this.headers });
  }

  tasksCount(): Observable<number> {
    const url = this.API_URL + '/stap-tasks/count';
    return this.httpClient.get<number>(url, { headers: this.headers });
  }

  createTask(title: string): Task{
    const t = new Task();
    t.title = title;
    t.description = '';
    t.isComplete = false;
    this.addTask(t)
    .subscribe(task => this.taskList.push(task));
    return t;
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
}
