import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AuthGuard } from './guards/auth.guard';

bootstrapApplication(App, {
  providers: [ provideRouter(routes), provideHttpClient(), AuthGuard ]
});