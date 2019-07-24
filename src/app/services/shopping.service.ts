import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  productName: string = "";
  productdetails = { "name": "", "size": "", "price": ''};
  count: number = 0;
  productsSelected = [];
  remainingStock: number = 10;
  totalPay: number = 0;
  
  public selectedProductName = new BehaviorSubject<string>('Name');
  public selectedProductSize = new BehaviorSubject<string>('Size');
  public selectedProductPrice = new BehaviorSubject<string>('Price');

  constructor(public httpClient: HttpClient) { }

  setDetails(value: any) {
    this.productsSelected.push(value);
    this.getCount(1);
    this.totalPayFun(value.price);
  }

  getDetails() {
    return this.productdetails.name;
  }

  getProductsSelected() {
    return this.productsSelected;
  }

  getCount(i: number) {
    this.count = this.count + i;
    this.remainingStock = this.remainingStock - i;
  }
  
  totalPayFun(p:number) {
    this.totalPay = this.totalPay + p;
  }

  getProductMen() {
    return this.httpClient.get('http://localhost:3000/Men');
   } 

  getProductWomen(){
    return this.httpClient.get('http://localhost:3000/Women');
   }

   getProductBaby(){
    return this.httpClient.get('http://localhost:3000/Baby');
   }

   getProductBrand(){
    return this.httpClient.get('http://localhost:3000/Brand');
   }

   getProductAccessory(){
    return this.httpClient.get('http://localhost:3000/Accessories');
   }

   getProductOffer(){
    return this.httpClient.get('http://localhost:3000/Offer');
   }

  //  cart = [this.selectedProductName.asObservable(), this.selectedProductSize.asObservable(), this.selectedProductPrice.asObservable()]
  cart1 = this.selectedProductName.asObservable(); 
  cart2 = this.selectedProductSize.asObservable(); 
  cart3 = this.selectedProductPrice.asObservable(); 

   editCart(prod:any, selected:any){
     this.selectedProductName.next(prod.name);
     this.selectedProductSize.next(<string>selected);
     console.log(selected);
     this.selectedProductPrice.next(prod.price);
   }
}