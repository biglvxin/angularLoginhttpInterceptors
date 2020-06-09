import { Injectable } from '@angular/core';
import { EvironmentService } from './evironment.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AutherticationGuardService {

  constructor(
    private router: Router,
    private evironmentService: EvironmentService,
    private userService: UserService,
  ) { }
  canLoad(route: Route) {
    // 是否可以加载路由
   // console.log('canload');
    return true;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(state);
    return this.evironmentService.userEnabled$.pipe(
      map(userEnabled => {
        if (userEnabled) {
          // first login
          if (!this.userService.getUserId()) {
            this.userService.setUserId();
            this.router.navigate(['login/login']);
            // console.log('必须先登录！');
            return false;
          }
          // console.log('canActivate');
          return true;
        }
      })
    );
  }
  canActivateChild() {
    // 返回false则导航将失败/取消
    // 也可以写入具体的业务逻辑
   // console.log('canActivateChild');
    return true;
  }
  canDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
    // console.log('canDeactivate');
    return true;
  }
}
