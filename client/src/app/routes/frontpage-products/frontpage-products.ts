import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../service/products.service';

@Component({
  imports: [],
  selector: 'app-frontpage-products',
  styleUrl: './frontpage-products.css',
  templateUrl: './frontpage-products.html',
})
export class FrontpageProducts {
  private productService = inject(ProductService);

  products = toSignal(this.productService.getAllProducts(), { initialValue: [] });
}