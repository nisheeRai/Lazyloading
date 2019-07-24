import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DarkSideHeaderComponent } from './home/dark-side-header/dark-side-header.component';
import { HomeComponent } from './home/home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { AboutUsComponent } from './home/footer/about-us/about-us.component';
import { ContactComponent } from './home/footer/contact/contact.component';
import { PolicyComponent } from './home/footer/policy/policy.component';
import { DisclaimerComponent } from './home/footer/disclaimer/disclaimer.component';

import { ShoppingService } from './services/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    DarkSideHeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
    PolicyComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
