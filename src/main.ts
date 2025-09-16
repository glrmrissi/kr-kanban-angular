import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { App } from './app/app';
import { Register } from './app/components/register/register';
import { Login } from './app/components/login/login';
import { provideHttpClient } from '@angular/common/http';
import { Home } from './app/components/home/home';
const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'home', component: Home },
  { path: '**', redirectTo: 'login' }
];

bootstrapApplication(App, {
  providers: [ provideRouter(routes), provideHttpClient() ]
});
