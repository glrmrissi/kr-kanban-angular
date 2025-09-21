import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  constructor(private http: HttpClient,
    private router: Router
  ) { }
  private platformId = inject(PLATFORM_ID);

  login(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      this.router.navigate(['/home']);
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  hasToken(): Observable<boolean> {
    let token: string | null = null;

    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('token');
      if (!token) {
        localStorage.removeItem('token');
        return of(false);
      }
    }
    return this.http.post<{ valid: boolean }>(
      'http://localhost:3000/auth/validate',
      { token }
    ).pipe(
      map(response => response.valid),
      catchError(() => of(false))
    );
  }
}
