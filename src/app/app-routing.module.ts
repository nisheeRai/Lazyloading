import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutUsComponent } from './home/footer/about-us/about-us.component';
import { ContactComponent } from './home/footer/contact/contact.component';
import { PolicyComponent } from './home/footer/policy/policy.component';
import { DisclaimerComponent } from './home/footer/disclaimer/disclaimer.component';

const routes: Routes = [
  {
    path: 'Men',
    loadChildren: () => import('./men/men/men.module').then(mod => mod.MenModule)
  },
  {
    path: 'Women',
    loadChildren: () => import('./women/women/women.module').then(mod => mod.WomenModule)
  },
  {
    path: 'Baby',
    loadChildren: () => import('./baby/baby/baby.module').then(mod => mod.BabyModule)
  },
  {
    path: 'Brands',
    loadChildren: () => import('./brand/brand/brand.module').then(mod => mod.BrandModule)
  },
  {
    path: 'Accessories',
    loadChildren: () => import('./accessories/accessories/accessories.module').then(mod => mod.AccessoriesModule)
  },
  {
    path: 'Offer',
    loadChildren: () => import('./offer/offer.module').then(mod => mod.OfferModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  { path: 'Home', component: HomeComponent},
  { path: 'About-us', component: AboutUsComponent},
  { path: 'Contact-us', component: ContactComponent},
  { path: 'Policy', component: PolicyComponent},
  { path: 'Disclaimer', component: DisclaimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
