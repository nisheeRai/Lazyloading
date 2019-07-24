import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { SharedModule } from 'src/app/shared.module';

import { ProductBrandsComponent } from '../product-brands/product-brands.component';

@NgModule({
  declarations: [
    ProductBrandsComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    SharedModule
  ]
})
export class BrandModule { }
