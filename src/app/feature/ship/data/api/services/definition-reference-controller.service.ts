/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NewReferenceInDefinition } from '../models/new-reference-in-definition';
import { Reference } from '../models/reference';
import { ReferencePartial } from '../models/reference-partial';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class DefinitionReferenceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation definitionReferenceControllerGet
   */
  static readonly DefinitionReferenceControllerGetPath = '/definitions/{id}/reference';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `get()` instead.
   *
   * This method doesn't expect any request body.
   */
  get$Response(params: {
    id: number;
    filter?: any;

  }): Observable<StrictHttpResponse<Reference>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionReferenceControllerService.DefinitionReferenceControllerGetPath, 'get');
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
        return r as StrictHttpResponse<Reference>;
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

  }): Observable<Reference> {

    return this.get$Response(params).pipe(
      map((r: StrictHttpResponse<Reference>) => r.body as Reference)
    );
  }

  /**
   * Path part for operation definitionReferenceControllerCreate
   */
  static readonly DefinitionReferenceControllerCreatePath = '/definitions/{id}/reference';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: number;
      body?: NewReferenceInDefinition
  }): Observable<StrictHttpResponse<Reference>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionReferenceControllerService.DefinitionReferenceControllerCreatePath, 'post');
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
        return r as StrictHttpResponse<Reference>;
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
      body?: NewReferenceInDefinition
  }): Observable<Reference> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Reference>) => r.body as Reference)
    );
  }

  /**
   * Path part for operation definitionReferenceControllerDelete
   */
  static readonly DefinitionReferenceControllerDeletePath = '/definitions/{id}/reference';

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

    const rb = new RequestBuilder(this.rootUrl, DefinitionReferenceControllerService.DefinitionReferenceControllerDeletePath, 'delete');
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
   * Path part for operation definitionReferenceControllerPatch
   */
  static readonly DefinitionReferenceControllerPatchPath = '/definitions/{id}/reference';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: number;
    where?: any;
      body?: ReferencePartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionReferenceControllerService.DefinitionReferenceControllerPatchPath, 'patch');
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
      body?: ReferencePartial
  }): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
