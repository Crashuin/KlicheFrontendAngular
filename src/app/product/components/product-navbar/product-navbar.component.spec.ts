import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavbarComponent } from './product-navbar.component';

describe('ProductNavbarComponent', () => {
  let component: ProductNavbarComponent;
  let fixture: ComponentFixture<ProductNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductNavbarComponent]
    });
    fixture = TestBed.createComponent(ProductNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
