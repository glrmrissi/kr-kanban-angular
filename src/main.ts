import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { App } from './app/app';
import { Register } from './app/components/register/register';
import { Login } from './app/components/login/login';
import { provideHttpClient } from '@angular/common/http';
import { Home } from './app/components/home/home';
import { routes } from './app/app.routes';
import { AuthGuard } from './app/guards/auth.guard';

bootstrapApplication(App, {
  providers: [ provideRouter(routes), provideHttpClient(), AuthGuard ]
});
