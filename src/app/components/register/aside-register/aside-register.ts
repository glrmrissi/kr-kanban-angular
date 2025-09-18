import { Component } from '@angular/core';
import { RegisterService } from '../../../services/register/register.service';

@Component({
  selector: 'app-aside-register',
  imports: [],
  templateUrl: './aside-register.html',
  styleUrls: ['./aside-register.scss', '../../login/aside-login/aside-login.scss']
})
export class AsideRegister {
  constructor(private registerService: RegisterService) {}

  clickRegister(name: string, email: string, password: string, passwordConfirm: string) {
    this.registerService.create({ name, email, password, role: 1 }).subscribe({
      next: (res) => {
        console.log('Register ok');
      },
      error: (err) => {
        console.error('Register failed');
        // Handle registration error (e.g., show error message)
      }
    });
  }
}
