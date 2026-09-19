import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../../models/Product";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    constructor(private http: HttpClient) {}

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`/api/products`);
    }

    searchProducts(query: string): Observable<Product[]> {
return this.http.get<Product[]>(`/api/products/search?q=${encodeURIComponent(query)}`);
    }
}

