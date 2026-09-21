import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spot } from '../../../models/Spot';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-spots',
  standalone: true,
  templateUrl: './spots.html',
  styleUrl: './spots.css'
})
export class Spots {
  private http = inject(HttpClient);
  
  spots = toSignal(this.http.get<Spot[]>('/api/spots'), { initialValue: [] });
  }
