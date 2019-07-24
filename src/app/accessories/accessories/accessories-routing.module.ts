import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductGallaryComponent } from 'src/app/product-gallary/product-gallary.component';
import { ProductAccessoriesComponent } from '../product-accessories/product-accessories.component';

const routes: Routes = [
  {
    path: '',
    component: ProductAccessoriesComponent
  },
  {
    path: 'AccessoriesDetails',
    component: ProductGallaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesRoutingModule { }
