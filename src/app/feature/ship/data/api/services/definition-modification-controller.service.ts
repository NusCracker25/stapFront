/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Modification } from '../models/modification';
import { ModificationPartial } from '../models/modification-partial';
import { NewModificationInDefinition } from '../models/new-modification-in-definition';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class DefinitionModificationControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation definitionModificationControllerFind
   */
  static readonly DefinitionModificationControllerFindPath = '/definitions/{id}/modifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: number;
    filter?: any;

  }): Observable<StrictHttpResponse<Array<Modification>>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionModificationControllerService.DefinitionModificationControllerFindPath, 'get');
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
        return r as StrictHttpResponse<Array<Modification>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: number;
    filter?: any;

  }): Observable<Array<Modification>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Modification>>) => r.body as Array<Modification>)
    );
  }

  /**
   * Path part for operation definitionModificationControllerCreate
   */
  static readonly DefinitionModificationControllerCreatePath = '/definitions/{id}/modifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: number;
      body?: NewModificationInDefinition
  }): Observable<StrictHttpResponse<Modification>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionModificationControllerService.DefinitionModificationControllerCreatePath, 'post');
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
        return r as StrictHttpResponse<Modification>;
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
      body?: NewModificationInDefinition
  }): Observable<Modification> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Modification>) => r.body as Modification)
    );
  }

  /**
   * Path part for operation definitionModificationControllerDelete
   */
  static readonly DefinitionModificationControllerDeletePath = '/definitions/{id}/modifications';

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

    const rb = new RequestBuilder(this.rootUrl, DefinitionModificationControllerService.DefinitionModificationControllerDeletePath, 'delete');
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
   * Path part for operation definitionModificationControllerPatch
   */
  static readonly DefinitionModificationControllerPatchPath = '/definitions/{id}/modifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: number;
    where?: any;
      body?: ModificationPartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, DefinitionModificationControllerService.DefinitionModificationControllerPatchPath, 'patch');
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
      body?: ModificationPartial
  }): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
