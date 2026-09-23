import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { HeroSlide } from '../../../models/Hero';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-hero-carousel',
  standalone: true,
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css'
})

export class HeroCarousel implements OnInit, OnDestroy {
  slides = signal<HeroSlide[]>([
    {
      id: 1,
      imageUrl: '/images/hostfarger.jpg',
      title: 'Nya färger till hösten',
      ctaText: 'Köp nu',
      ctaLink: '/'
    },
    {
      id: 2,
      imageUrl: '/images/monster.jpg',
      title: 'Se våra mönster',
      ctaText: 'Till mönster',
      ctaLink: '/'
    },
    {
      id: 3,
      imageUrl: '/images/wool.jpg',
      title: 'Läs allt om våran ull',
      ctaText: 'Läs här',
      ctaLink: '/'
    }
  ]);

  currentIndex = signal(0);

  // Private variable saves interval
  private intervalId?: ReturnType<typeof setInterval>;

  // interval 5 sec
  private readonly intervalMs = 5000;

  // Autoplay of timer
  ngOnInit() {
    this.startAutoplay();
  }

  // Turns off when navigating off site
  ngOnDestroy() {
    this.stopAutoplay();
  }

  // Starts autoplay, timer every 5 sec
  startAutoplay() {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.intervalMs);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Next slide
  next() {
    const total = this.slides().length;
    this.currentIndex.set((this.currentIndex() + 1) % total);
  }

  // Previous slide
  prev() {
    const total = this.slides().length;
    this.currentIndex.set((this.currentIndex() - 1 + total) % total);
  }

  // Go to slide with dots
  goTo(index: number) {
    this.currentIndex.set(index);
    this.startAutoplay(); // reset timer on manual navigation
  }
}