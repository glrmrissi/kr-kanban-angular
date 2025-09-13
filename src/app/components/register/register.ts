import { Component } from '@angular/core';
import { AsideRegister } from "./aside-register/aside-register";

@Component({
  selector: 'app-register',
  imports: [AsideRegister],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

}
