import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGallaryComponent } from './product-gallary/product-gallary.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './men/product-list/product-list.component';
import { ProductWomenComponent } from './women/product-women/product-women.component';
import { ProductAccessoriesComponent } from './accessories/product-accessories/product-accessories.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductGallaryComponent,
    ProductListComponent,
    ProductWomenComponent,
    ProductAccessoriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ProductDetailsComponent,
    ProductGallaryComponent,
    FormsModule,
    ReactiveFormsModule,
    ProductListComponent,
    ProductWomenComponent,
    ProductAccessoriesComponent
  ]
})
export class SharedModule { }
