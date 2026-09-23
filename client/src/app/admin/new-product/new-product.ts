import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/products.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminHeader } from '../admin-header/admin-header';

@Component({
  imports: [FormsModule, AdminHeader],
  selector: 'app-new-product',
  styleUrl: './new-product.css',
  templateUrl: './new-product.html',
})
export class NewProduct {
  // Injektar addProdycts från productservice
  private productService = inject(ProductService);
  private router = inject(Router);

  title = '';
  description = '';
  imageUrl = '';
  slug = '';
  price: number | null = null;

  titleError = '';
  priceError ='';

  onSubmit() {
    this.titleError = '';
    this.priceError = '';

    let valid = true;

    if (!this.title.trim()) {
      this.titleError = 'Namn krävs';
      valid = false;
    } 

    if (this.price === null || this.price < 0) {
      this.priceError = 'Pris krävs och måste vara positivt';
      valid = false;
    }

    if (!valid) {
      return;
    }

    this.productService
      .addProduct({
        Title: this.title,
        Description: this.description,
        Image_url: this.imageUrl,
        Slug: this.slug,
        Price: this.price!,
      })
      .subscribe(() => {
        this.router.navigate(['/admin/products']);
      });
  }
}



