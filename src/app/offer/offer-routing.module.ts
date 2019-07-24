import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductOfferZoneComponent } from './product-offer-zone/product-offer-zone.component';
import { ProductOfferDetailsComponent } from './product-offer-zone/product-offer-details/product-offer-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductOfferZoneComponent
  },
  {
    path: 'Product-offer-details',
    component: ProductOfferDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
