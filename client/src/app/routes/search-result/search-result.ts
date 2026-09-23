import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterEvent, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ProductService } from '../../service/products.service';

@Component({
  imports: [RouterLink],
  selector: 'app-search-result',
  styleUrl: './search-result.css',
  templateUrl: './search-result.html',
})
export class SearchResult {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  products = toSignal(
    this.route.queryParams.pipe(
      switchMap((params) => {
        const q = params['q'];
        return q ? this.productService.searchProducts(q) : [];
      }),
    ),
    { initialValue: [] },
  );
}
