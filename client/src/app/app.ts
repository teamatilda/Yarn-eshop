
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home  } from './routes/home/home'; 
import { FrontpageProducts } from './routes/frontpage-products/frontpage-products';

@Component({
  selector: 'app-root',
  imports: [Home, FrontpageProducts, RouterLink, RouterOutlet],
  template: `
  <app-home />
  <app-frontpage-products />`,
  styleUrl: './routes/home/home.css',
})
export class App {
  protected readonly title = signal('client');
 
};


