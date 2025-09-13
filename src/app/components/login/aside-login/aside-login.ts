import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-aside-login',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './aside-login.html',
  styleUrls: ['./aside-login.scss']
})
export class AsideLogin {
  clickLogin() {
    console.log('login');
  }
}
