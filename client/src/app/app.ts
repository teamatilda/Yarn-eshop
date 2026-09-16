
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home  } from './routes/home/home'; 
import { FrontpageProducts } from './routes/frontpage-products/frontpage-products';
import { Footer } from './routes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, FrontpageProducts, Footer, RouterLink, RouterOutlet],
  template: `
  <app-home />
  <app-frontpage-products />
  <app-footer />`,
  styleUrl: './routes/home/home.css',
})
export class App {
  protected readonly title = signal('client');
 
};


