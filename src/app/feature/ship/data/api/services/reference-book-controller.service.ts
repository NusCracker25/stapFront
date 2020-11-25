/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Book } from '../models/book';
import { BookPartial } from '../models/book-partial';
import { NewBookInReference } from '../models/new-book-in-reference';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class ReferenceBookControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation referenceBookControllerGet
   */
  static readonly ReferenceBookControllerGetPath = '/references/{id}/book';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    id: number;
    filter?: any;

  }): Observable<StrictHttpResponse<Book>> {

    const rb = new RequestBuilder(this.rootUrl, ReferenceBookControllerService.ReferenceBookControllerGetPath, 'get');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Book>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `get$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  get(params: {
    id: number;
    filter?: any;

  }): Observable<Book> {

    return this.get$Response(params).pipe(
      map((r: StrictHttpResponse<Book>) => r.body as Book)
    );
  }

  /**
   * Path part for operation referenceBookControllerCreate
   */
  static readonly ReferenceBookControllerCreatePath = '/references/{id}/book';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: number;
      body?: NewBookInReference
  }): Observable<StrictHttpResponse<Book>> {

    const rb = new RequestBuilder(this.rootUrl, ReferenceBookControllerService.ReferenceBookControllerCreatePath, 'post');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Book>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    id: number;
      body?: NewBookInReference
  }): Observable<Book> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Book>) => r.body as Book)
    );
  }

  /**
   * Path part for operation referenceBookControllerDelete
   */
  static readonly ReferenceBookControllerDeletePath = '/references/{id}/book';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: number;
    where?: any;

  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, ReferenceBookControllerService.ReferenceBookControllerDeletePath, 'delete');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('where', params.where, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: number;
    where?: any;

  }): Observable<LoopbackCount> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation referenceBookControllerPatch
   */
  static readonly ReferenceBookControllerPatchPath = '/references/{id}/book';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: number;
    where?: any;
      body?: BookPartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, ReferenceBookControllerService.ReferenceBookControllerPatchPath, 'patch');
    if (params) {

      rb.path('id', params.id, {});
      rb.query('where', params.where, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: {
    id: number;
    where?: any;
      body?: BookPartial
  }): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
