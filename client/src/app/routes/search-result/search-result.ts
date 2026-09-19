import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';
import { ProductService } from '../../service/products.service';

@Component({
  imports: [],
  selector: 'app-search-result',
  styleUrl: './search-result.css',
  templateUrl: './search-result.html',
})
export class SearchResult {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  products = toSignal(
    this.route.queryParams.pipe(
      tap(params => console.log('queryParams emitted:', params)),
      switchMap(params => {
        const q = params['q'];
        console.log('q är:', q);
        if (!q) {
          return [];
        }
        return this.productService.searchProducts(q).pipe(
          tap(data => console.log('sökresultat:', data))
        );
      })
    ),
    { initialValue: [] }
  );
}