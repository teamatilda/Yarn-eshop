import { Component, inject, signal } from '@angular/core';
import { Product } from '../../../models/Product';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [],
  selector: 'app-frontpage-products',
  styleUrl: './frontpage-products.css',
  templateUrl: './frontpage-products.html',
})
export class FrontpageProducts {

  protected readonly title = signal('client');

  private http = inject(HttpClient);
  // HTTP-get

  /* Skapar signal som innehåller lista med produkter. signal() skapar ett reaktivt värde som Angular kan hålla koll på. När värdet ändras kan Angular uppdatera gränssnittet */
  products = signal<Product[]>([]);

  /* Körs när komponenten initieras. Gör HTTP GET-anrop till /api/products */ 
  ngOnInit(): void {
    this.http.get<Product[]>("/api/products")

  /* prenumererar på resultatet. observable som representerar en asynkront operation - callback anropas när vi får svar */
    .subscribe(products => {
      this.products.set(products);
    })
  };

}
