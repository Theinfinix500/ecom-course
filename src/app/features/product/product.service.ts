import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

export interface FindAllOptions {
  page?: number;
  size?: number;
  sort?: string;
  order?: 'ASC' | 'DESC';
  globalFilter?: string;
  globalFilterFields?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  protected http: HttpClient = inject(HttpClient);

  getProducts({
    page = 1,
    size = 10,
    sort = '',
    order = 'ASC',
    globalFilterFields = [],
    globalFilter = ''
  }: FindAllOptions) {
    let request = `${this.apiUrl}?limit=${size}&page=${page}`;

    if (sort !== '') {
      request = request + `&sort=${sort}&order=${order}`;
    }

    if (globalFilter) {
      request =
        request +
        `&globalFilter=${globalFilter}&globalFilterFields=${globalFilterFields}`;
    }

    return this.http.get<{ data: any[] }>(request);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
