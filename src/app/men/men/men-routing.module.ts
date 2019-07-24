import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductGallaryComponent } from 'src/app/product-gallary/product-gallary.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'MenProducts',
    component: ProductGallaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenRoutingModule { }
