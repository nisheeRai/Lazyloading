import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { SharedModule } from 'src/app/shared.module';

import { ProductOfferZoneComponent } from './product-offer-zone/product-offer-zone.component';
import { ProductOfferDetailsComponent } from './product-offer-zone/product-offer-details/product-offer-details.component';

@NgModule({
  declarations: [
    ProductOfferZoneComponent,
    ProductOfferDetailsComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule,
    SharedModule
  ]
})
export class OfferModule { }
