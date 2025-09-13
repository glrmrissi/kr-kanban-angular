import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  constructor(private loginService: LoginService) { }

  clickLogin() {
    this.loginService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users = data)
    });
  }
}
