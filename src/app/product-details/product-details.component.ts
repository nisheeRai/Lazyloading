import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../services/shopping.service';
import { Products } from '../interface/products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public prod: Products;
  selected: {};
  proSelected = [];
  selectedProductName: string;
  selectedProductSize: string;
  selectedProductPrice: string;

  OfferDetail = "Buy Jhon Playes Men's Striped Casual Shirt worth 2499 or more get 33% off Offer valid on selected items only";
  editCart: string;

  constructor(public shoppingService: ShoppingService) { }

  ngOnInit() {
    this.prod = JSON.parse(sessionStorage.getItem('pro'));

    this.shoppingService.cart1.subscribe(selectedProductName => this.selectedProductName = selectedProductName);
    this.shoppingService.cart2.subscribe(selectedProductSize => this.selectedProductSize = selectedProductSize);
    this.shoppingService.cart3.subscribe(selectedProductPrice => this.selectedProductPrice = selectedProductPrice);
  }

  editTheCart(prod: any, selected: any) {
    if (this.selected != undefined) {
      this.shoppingService.editCart(this.prod, this.selected);
      let data = {
        "name": this.prod.name,
        "size": this.selected,
        "price": this.prod.price
      };
      this.shoppingService.setDetails(data);
    }
  }
}