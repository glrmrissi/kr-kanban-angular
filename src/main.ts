import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { App } from './app/app';
import { Register } from './app/components/register/register';
import { Login } from './app/components/login/login';
import { provideHttpClient } from '@angular/common/http';
const routes: Routes = [
  { path: '', component: Login },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [ provideRouter(routes), provideHttpClient() ]
});
