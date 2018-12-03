import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo2LCJ1c2VybmFtZSI6Im1vY2hhY2hhaSIsImV4cCI6MTU0Mzg2OTMwNCwiZW1haWwiOiJtaXNobzEzQGhvdG1haWwuY28udWsifQ.5J5vVkxoT861CnePM_EA9ctnIUjN2L08L5ADSf5LDpU}`
      }
    });

    return next.handle(request);
  }
}