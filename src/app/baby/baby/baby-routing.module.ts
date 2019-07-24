import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductBabyKidsComponent } from '../product-baby-kids/product-baby-kids.component';
import { ProductGallaryComponent } from 'src/app/product-gallary/product-gallary.component';

const routes: Routes = [
  {
    path: '',
    component: ProductBabyKidsComponent
  },
  {
    path: 'BabyProducts',
    component: ProductGallaryComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BabyRoutingModule { }
