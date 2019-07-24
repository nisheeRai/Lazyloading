import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    MenRoutingModule,
    SharedModule
  ]
})
export class MenModule { }
