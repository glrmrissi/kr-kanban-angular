import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

