import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductWomenComponent } from '../product-women/product-women.component';
import { ProductGallaryComponent } from 'src/app/product-gallary/product-gallary.component';

const routes: Routes = [
  {
    path: '',
    component: ProductWomenComponent
  },
  {
    path: 'WomenProduct',
    component: ProductGallaryComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
