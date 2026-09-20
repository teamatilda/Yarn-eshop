import { Component } from '@angular/core';
import { HeroCarousel } from '../hero-carousel/hero-carousel';
import { Spots } from '../spots/spots';
import { FrontpageProducts } from '../frontpage-products/frontpage-products';

@Component({
  selector: 'app-home',
  imports: [HeroCarousel, Spots, FrontpageProducts],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}