import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/products.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-admin-page',
  styleUrl: './admin-page.css',
  templateUrl: './admin-page.html',
})
export class AdminPage {
   private productService = inject(ProductService);

  products = toSignal(this.productService.getAllProducts(), { initialValue: [] });
}

