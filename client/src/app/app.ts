
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home  } from './routes/home/home'; 
import { HeroCarousel } from './routes/hero-carousel/hero-carousel';
import { FrontpageProducts } from './routes/frontpage-products/frontpage-products';
import { Footer } from './routes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Home, HeroCarousel, FrontpageProducts, Footer, RouterLink, RouterOutlet],
  template: `
  <app-home />
  <app-hero-carousel />
  <app-frontpage-products />
  <app-footer />`,
  styleUrl: './routes/home/home.css',
})
export class App {
  protected readonly title = signal('client');
 
};


