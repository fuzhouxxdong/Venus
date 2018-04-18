import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthenticationService) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    // if (this.authService.isLogin()) {
    //   return true;
    // }

    return true;
  }
}
