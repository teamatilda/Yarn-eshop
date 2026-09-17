import { Component, OnInit, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spot } from '../../../models/Spot';

@Component({
  selector: 'app-spots',
  standalone: true,
  templateUrl: './spots.html',
  styleUrl: './spots.css'
})
export class Spots implements OnInit {
  private http = inject(HttpClient);
  spots = signal<Spot[]>([]);

  ngOnInit() {
    this.http.get<Spot[]>('/api/spots').subscribe(data => {
      this.spots.set(data);
    });
  }
}