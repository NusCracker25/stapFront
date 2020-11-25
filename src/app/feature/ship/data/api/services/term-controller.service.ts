/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { NewTerm } from '../models/new-term';
import { Term } from '../models/term';
import { TermPartial } from '../models/term-partial';
import { TermWithRelations } from '../models/term-with-relations';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class TermControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation termControllerCount
   */
  static readonly TermControllerCountPath = '/terms/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `count()` instead.
   *
   * This method doesn't expect any request body.
   */
  count$Response(params?: {
    where?: any;

  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerCountPath, 'get');
    if (params) {

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
   * To access the full response (for headers, for example), `count$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  count(params?: {
    where?: any;

  }): Observable<LoopbackCount> {

    return this.count$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation termControllerFindById
   */
  static readonly TermControllerFindByIdPath = '/terms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: {
    id: number;
    filter?: any;

  }): Observable<StrictHttpResponse<TermWithRelations>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerFindByIdPath, 'get');
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
        return r as StrictHttpResponse<TermWithRelations>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: {
    id: number;
    filter?: any;

  }): Observable<TermWithRelations> {

    return this.findById$Response(params).pipe(
      map((r: StrictHttpResponse<TermWithRelations>) => r.body as TermWithRelations)
    );
  }

  /**
   * Path part for operation termControllerReplaceById
   */
  static readonly TermControllerReplaceByIdPath = '/terms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `replaceById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById$Response(params: {
    id: number;
      body?: Term
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerReplaceByIdPath, 'put');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `replaceById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  replaceById(params: {
    id: number;
      body?: Term
  }): Observable<void> {

    return this.replaceById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation termControllerDeleteById
   */
  static readonly TermControllerDeleteByIdPath = '/terms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById$Response(params: {
    id: number;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerDeleteByIdPath, 'delete');
    if (params) {

      rb.path('id', params.id, {});

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteById(params: {
    id: number;

  }): Observable<void> {

    return this.deleteById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation termControllerUpdateById
   */
  static readonly TermControllerUpdateByIdPath = '/terms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById$Response(params: {
    id: number;
      body?: TermPartial
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerUpdateByIdPath, 'patch');
    if (params) {

      rb.path('id', params.id, {});

      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateById(params: {
    id: number;
      body?: TermPartial
  }): Observable<void> {

    return this.updateById$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation termControllerFind
   */
  static readonly TermControllerFindPath = '/terms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params?: {
    filter?: any;

  }): Observable<StrictHttpResponse<Array<TermWithRelations>>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerFindPath, 'get');
    if (params) {

      rb.query('filter', params.filter, {});

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TermWithRelations>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params?: {
    filter?: any;

  }): Observable<Array<TermWithRelations>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TermWithRelations>>) => r.body as Array<TermWithRelations>)
    );
  }

  /**
   * Path part for operation termControllerCreate
   */
  static readonly TermControllerCreatePath = '/terms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params?: {
      body?: NewTerm
  }): Observable<StrictHttpResponse<Term>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerCreatePath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Term>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params?: {
      body?: NewTerm
  }): Observable<Term> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<Term>) => r.body as Term)
    );
  }

  /**
   * Path part for operation termControllerUpdateAll
   */
  static readonly TermControllerUpdateAllPath = '/terms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAll()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll$Response(params?: {
    where?: any;
      body?: TermPartial
  }): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, TermControllerService.TermControllerUpdateAllPath, 'patch');
    if (params) {

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
   * To access the full response (for headers, for example), `updateAll$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateAll(params?: {
    where?: any;
      body?: TermPartial
  }): Observable<LoopbackCount> {

    return this.updateAll$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
