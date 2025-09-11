import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetails } from './layout/components/product-details/product-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-new-app');
}