import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductBrandsComponent } from '../product-brands/product-brands.component';

const routes: Routes = [
  {
    path: '',
    component: ProductBrandsComponent
  },
  {
    path: 'MenBrands',
    loadChildren: () => import('../../men/men/men.module').then(mod => mod.MenModule)
  },
  {
    path: 'Accessory',
    loadChildren: () => import('../../accessories/accessories/accessories.module').then(mod => mod.AccessoriesModule)
  },
  {
    path: 'WomenBrands',
    loadChildren: () => import('../../women/women/women.module').then(mod => mod.WomenModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
