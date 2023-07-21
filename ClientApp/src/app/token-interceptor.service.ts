import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { LoginService } from './services/login.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}
  intercept(req, next) {
    console.log(req)
    let authService = this.injector.get(LoginService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }

}