import { Injectable } from '@angular/core';
import { EvironmentService } from './evironment.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
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
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.evironmentService.userEnabled$.pipe(
      map(userEnabled => {
        if (userEnabled) {
          // first login
          if (!this.userService.getUserId()) {
            this.userService.setUserId();
            this.router.navigate(['login/login']);
            return false;
          }
          return true;
        }
      })
    );
  }

}
