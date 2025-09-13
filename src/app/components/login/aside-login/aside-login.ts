import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../../../services/login.service';
@Component({
  selector: 'app-aside-login',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './aside-login.html',
  styleUrls: ['./aside-login.scss']
})
export class AsideLogin {
  users: any[] = [];

  constructor(private loginService: LoginService, private readonly router: Router) { }

  clickLogin() {
    const emailInput = document.getElementById("loginEmail") as HTMLInputElement | null;
    const passwordInput = document.getElementById("loginPassword") as HTMLInputElement | null;
    
    this.loginService.getUsers().subscribe(data => {
      const res = this.users = data;
      if (!emailInput || !passwordInput) {
        console.log('Email or password input not found');
        return;
      }
      const user = res.find(u => u.email === emailInput.value && u.password === passwordInput.value);
      if (user) {
        this.router.navigate(['/home']);
      } else {
        console.log('Login failed');
      }
    });
  }
}
