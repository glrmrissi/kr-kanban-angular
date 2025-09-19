// TODO: Refactor AuthGuard to validate token with backend before allowing route activation


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient) {}

  canActivate(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return Promise.resolve(false);
    }

    return this.http.get<{ valido: boolean }>('http://localhost:3000/auth/validar', {
      headers: { Authorization: `Bearer ${token}` }
    }).toPromise()
      .then(res => {
        if (res?.valido) return true;
        this.router.navigate(['/login']);
        return false;
      })
      .catch(() => {
        this.router.navigate(['/login']);
        return false;
      });
  }
}
