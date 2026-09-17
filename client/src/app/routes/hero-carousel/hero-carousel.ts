import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { HeroSlide } from '../../../models/Hero';

@Component({
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
      title: 'Läs allt om vårat ull',
      ctaText: 'Läs här',
      ctaLink: '/'
    }
  ]);

  // Börjar på 0
  currentIndex = signal(0);

  // Privat variable som sparar referensen till timern
  private intervalId?: ReturnType<typeof setInterval>;

  // intervall på 5 sekunder
  private readonly intervalMs = 5000;

  // Körs när komponenten skapas - autoplay på timern
  ngOnInit() {
    this.startAutoplay();
  }

  // Stängs av när man navigerar från sidan
  ngOnDestroy() {
    this.stopAutoplay();
  }

  // Starta autoplay, timer anropas next varje 5:e sekund
  startAutoplay() {
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.intervalMs);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  // Nästa slide
  next() {
    const total = this.slides().length;
    this.currentIndex.set((this.currentIndex() + 1) % total);
  }

  // Föregående slide
  prev() {
    const total = this.slides().length;
    this.currentIndex.set((this.currentIndex() - 1 + total) % total);
  }

  // Går till specifik slide när man klickar på en punkt
  goTo(index: number) {
    this.currentIndex.set(index);
    this.startAutoplay(); // reset timer on manual navigation
  }
}