import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../service/products.service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-frontpage-products',
  styleUrl: './frontpage-products.css',
  templateUrl: './frontpage-products.html',
})
export class FrontpageProducts {
  private productService = inject(ProductService);

  products = toSignal(this.productService.getAllProducts(), { initialValue: [] });

  // 8 product-cards
  displayedProducts = computed(() => this.products().slice(0, 8));
}