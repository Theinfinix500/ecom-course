import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected http: HttpClient = inject(HttpClient);

  getProducts({ page = 1, size = 10, sort = '', order = 'ASC' }) {
    let request = `http://localhost:3000/products?limit=${size}&page=${page}`;

    if (sort !== '') {
      request = request + `&sort=${sort}&order=${order}`;
    }

    return this.http.get<{ data: any[] }>(request);
  }
}
