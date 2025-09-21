import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LoginResponse } from '../app/services/login/login.service';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  exp: number; // tempo de expiração em "seconds since epoch"
  sub: string; // id do usuário (se o backend enviar)
  [key: string]: any; // outros dados que o backend enviar
}

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private platformId = inject(PLATFORM_ID);
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  login(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.logout()
      localStorage.setItem('token', token);
    }
    this.isLoggedInSubject.next(true);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
    this.isLoggedInSubject.next(false);
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  hasToken(): boolean {
    console.log('Checking token validity...');
    if (!isPlatformBrowser(this.platformId)) return false;

    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return false;

      return true;
    } catch (e) {
      return false;
    }
  }
}
