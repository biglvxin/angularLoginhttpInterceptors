import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
const ignoreToken = ['user', 'evironment'];
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>   {
       // console.log(req);
        // 补全地址
        let url = req.url;
        const needToken = ignoreToken.filter(u => url.match(u));
        console.log(needToken); // ['evironment']
        if (url.indexOf('http://') < 0 || url.indexOf('https://') < 0) {
            url = 'http://' + url;
            console.log(url); // http://../../../assets/json/evironment.details.json
        }
        // 设置token的请求头
        // 获取token值(可以从本地缓存里得到)
        const authToken = 'lvxinToken';
        if (authToken) {
            // 服务请求时所有的请求加入token
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'bearer' + authToken),
                url: req.url
            });
            // 服务器响应结果
            return next.handle(authReq).pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    this.handleData(event);
                }
            }, error => {
                // token过期 服务器错误等处理
            }));
        }
        // 若token不存在，则不对请求进行处理
        return next.handle(req).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                // console.log(event);
                this.handleData(event);
            }
        }, error => {
            // token过期 服务器错误等处理
        }));
    }
    handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
            // 业务处理：一些通用操作
            switch (event.status) {
                case 200:
                    if (event instanceof HttpResponse) {
                        const body: any = event.body;
                        console.log(event);
                    }
                    break;
                case 401: // 未登录状态码
                    // this.goTo('/login');
                    break;
                case 404:
                case 500:
                    // console.log(event);
                    break;
                default:
                    return of(event);
            }
    }
}
