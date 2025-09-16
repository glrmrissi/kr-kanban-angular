import { Routes } from '@angular/router';
import { AsideLogin } from './components/login/aside-login/aside-login';
import { AuthGuard } from './guards/auth.guard';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: 'login', component: AsideLogin },
    { path: 'home', component: Home, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'login' }
];
