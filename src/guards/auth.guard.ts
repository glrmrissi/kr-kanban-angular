import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthStateService } from '../auth/auth.service';
import { AsideLogin } from '../app/components/login/aside-login/aside-login';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authState: AuthStateService, 
    private router: Router,
    private readonly asideLogin: AsideLogin
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authState.getToken()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
