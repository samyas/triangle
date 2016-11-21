import { Injectable } from '@angular/core';
import {
    Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Headers,
    Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class HttpInterceptor extends Http {
    constructor(backend: ConnectionBackend,
        defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.get(url, options)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(url, options);
    }

    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        /*  return super.post(url, body, this.requestOptions(options))
              .catch(this.onCatch)
              .do((res: Response) => {
                  this.onSubscribeSuccess(res);
              }, (error: any) => {
                  this.onSubscribeError(error);
              })
              .finally(() => {
                  this.onFinally();
              });*/
        return super.post(url, body, options).catch((res: Response) => this.handleResponseError(res));
    }

    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.put(url, body, options)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }

    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        this.requestInterceptor();
        return super.delete(url, options)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally();
            });
    }




    private handleResponseError(res: Response) {
        return Observable.throw(res);
    }

    /**
     * Request interceptor.
     */
    private requestInterceptor(): void {
        // do something on every http request
        // this.loaderService.showPreloader();
    }

    /**
     * Response interceptor.
     */
    private responseInterceptor(): void {
        // do something on every http response
        //this.loaderService.hidePreloader();
    }

    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * onSubscribeSuccess
     * @param res
     */
    private onSubscribeSuccess(res: Response): void {}

    /**
     * onSubscribeError
     * @param error
     */
    private onSubscribeError(error: any): void {}

    /**
     * onFinally
     */
    private onFinally(): void {
        this.responseInterceptor();
    }
}
