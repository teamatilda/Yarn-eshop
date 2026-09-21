/* Service with methods to get products from backend  */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/products`);
  }

  getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`/api/products/${slug}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/api/products/search?q=${encodeURIComponent(query)}`);
  }

  addProduct(product: Omit<Product, 'ID'>) {
    return this.http.post<Product>('/api/products', product);
  }
}
