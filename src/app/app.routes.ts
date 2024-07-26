import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/product/product.routes').then(r => r.routes)
      },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'product/create', component: ProductDetailComponent }
    ]
  }
];
