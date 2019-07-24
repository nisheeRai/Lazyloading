import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    SharedModule
  ]
})
export class AccessoriesModule { }
