import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStateService } from '../app/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthStateService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.hasToken().pipe(
      map(isValid => {
        if (!isValid) {
          this.router.navigate(['/login']);
          return false;
        }
        console.log('Token found, access granted.');
        return true;
      })
    );
  }
}
