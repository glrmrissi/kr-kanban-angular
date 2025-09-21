import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStateService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-new-app');

  constructor(private authService: AuthStateService) {
    this.authService.hasToken();
  }
}