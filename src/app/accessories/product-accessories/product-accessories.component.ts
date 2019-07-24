import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-accessories',
  templateUrl: './product-accessories.component.html',
  styleUrls: ['./product-accessories.component.css']
})
export class ProductAccessoriesComponent implements OnInit {

  public product: any=[];


  constructor(public shoppingService: ShoppingService, public router: Router) { }

  ngOnInit() {
    this.shoppingService.getProductAccessory().subscribe( response => {
      this.product=response;
    });
  }

  onSelect(pro){
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('Accessories/AccessoriesDetails');
  }
}