import { Component } from '@angular/core';
import { AsideLogin } from './aside-login/aside-login';

@Component({
  selector: 'app-login',
  imports: [AsideLogin],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
