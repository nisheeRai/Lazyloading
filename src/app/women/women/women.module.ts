import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WomenRoutingModule,
    SharedModule
  ]
})
export class WomenModule { }
