import { Component, Injectable } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService, LoginResponse } from '../../../services/login/login.service';
import { AuthStateService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-aside-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './aside-login.html',
  styleUrls: ['./aside-login.scss']
})

@Injectable({ providedIn: 'root' })
export class AsideLogin {
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private authState: AuthStateService,
    private readonly router: Router
  ) { }


  clickLogin(email: string, password: string) {
    this.loginService.login({ email, password }).subscribe({
      next: (res: LoginResponse) => {
        this.authState.login(res.accessToken); // guarda no estado global
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
