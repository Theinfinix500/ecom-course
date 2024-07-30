import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductDetailComponent,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [provideRouter([]), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
