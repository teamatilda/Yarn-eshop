import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/products.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-new-product',
  styleUrl: './new-product.css',
  templateUrl: './new-product.html',
})
export class NewProduct {
  private productService = inject(ProductService);
  private router = inject(Router);

  title = '';
  description = '';
  imageUrl = '';
  slug = '';
  price: number | null = null;

  onSubmit() {
    if (!this.title || this.price === null) {
      return;
    }

    this.productService
      .addProduct({
        Title: this.title,
        Description: this.description,
        Image_url: this.imageUrl,
        Slug: this.slug,
        Price: this.price,
      })
      .subscribe(() => {
        this.router.navigate(['/admin']);
      });
  }
}



