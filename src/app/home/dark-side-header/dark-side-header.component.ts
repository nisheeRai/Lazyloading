import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Products } from '../../interface/products';

@Component({
  selector: 'app-dark-side-header',
  templateUrl: './dark-side-header.component.html',
  styleUrls: ['./dark-side-header.component.css']
})
export class DarkSideHeaderComponent implements OnInit {
 
  selectedPro: any[];
  show_dialog: boolean = false;
  isValid: boolean = false;
  public prod: Products;

  constructor(public shoppingService:ShoppingService){}

  ngOnInit() {
    this.prod=JSON.parse(sessionStorage.getItem('pro'));
  }

  displayInCart() {
    this.selectedPro = this.shoppingService.getProductsSelected();
  }

  toggle() {
    this.isValid = !this.isValid;
    this.show_dialog = !this.show_dialog;
  }

  removeFromCart(i:number, price:number){
      this.shoppingService.productsSelected.splice(i, 1);
      this.shoppingService.getCount(-1);
      this.shoppingService.totalPayFun(-price);
  }
}