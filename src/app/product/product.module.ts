import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductNavbarComponent } from './components/product-navbar/product-navbar.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductNavbarComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductModule { }
