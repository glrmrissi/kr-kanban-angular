import { Component } from '@angular/core';
import { AsideLogin } from './aside-login/aside-login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AsideLogin],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

}
