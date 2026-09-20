import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { ProductService } from '../../service/products.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-detail',
  styleUrl: './product-detail.css',
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug')!;
        return this.productService.getProductBySlug(slug);
      })
    )
  );

  // All products
  allProducts = toSignal(this.productService.getAllProducts(), { initialValue: [] });

  // Similar products
  similarProducts = computed(() => {
    const current = this.product();
    if (!current) return [];
    return this.allProducts()
    .filter(p => p.ID !== current.ID)
    .slice(0, 3);
  })

}