import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService, LoginResponse } from '../../../services/login/login.service';

@Component({
  selector: 'app-aside-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './aside-login.html',
  styleUrls: ['./aside-login.scss']
})
export class AsideLogin {
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private readonly router: Router
  ) {}

  clickLogin(name: string, email: string, password: string) {
    this.loginService.login({ name, email, password }).subscribe({
      next: (res: LoginResponse) => {
        console.log('Login ok', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
