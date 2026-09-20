
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './routes/navbar/navbar'; 
import { Footer } from './routes/footer/footer';


@Component({
  selector: 'app-root',
  imports: [Navbar,  Footer, RouterOutlet],
  template: `
  <app-navbar />
  <router-outlet />
  <app-footer />`,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
 
};


