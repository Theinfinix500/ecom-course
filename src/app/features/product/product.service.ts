import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  protected http: HttpClient = inject(HttpClient);

  getProducts({ page = 1, size = 10, sort = '', order = 'ASC' }) {
    let request = `${this.apiUrl}?limit=${size}&page=${page}`;

    if (sort !== '') {
      request = request + `&sort=${sort}&order=${order}`;
    }

    return this.http.get<{ data: any[] }>(request);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
