import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected http: HttpClient = inject(HttpClient);

  getData() {
    return this.http
      .get<{ data: any[] }>(`http://localhost:3000/products?limit=10&page=1`)
      .pipe(map(result => result.data));
  }

  //   getCustomersMini() {
  //     return Promise.resolve(this.getData().slice(0, 5));
  //   }

  //   getCustomersSmall() {
  //     return Promise.resolve(this.getData().slice(0, 10));
  //   }

  //   getCustomersMedium() {
  //     return Promise.resolve(this.getData().slice(0, 50));
  //   }

  //   getCustomersLarge() {
  //     return Promise.resolve(this.getData().slice(0, 200));
  //   }

  getCustomersXLarge() {
    return Promise.resolve(this.getData());
  }

  getCustomers(params?: any) {
    return this.http
      .get<any>('https://www.primefaces.org/data/customers', { params: params })
      .toPromise();
  }
}
