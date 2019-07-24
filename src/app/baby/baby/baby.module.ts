import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BabyRoutingModule } from './baby-routing.module';
import { SharedModule } from 'src/app/shared.module';

import { ProductBabyKidsComponent } from '../product-baby-kids/product-baby-kids.component';

@NgModule({
  declarations: [ProductBabyKidsComponent],
  imports: [
    CommonModule,
    BabyRoutingModule,
    SharedModule
  ]
})
export class BabyModule { }
