import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-register',
  imports: [],
  templateUrl: './aside-register.html',
  styleUrls: ['./aside-register.scss', '../../login/aside-login/aside-login.scss']
})
export class AsideRegister {
  clickRegister() {
    console.log('click register');
  }
}
