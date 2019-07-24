import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public product: any=[];


  constructor(public shoppingService: ShoppingService, public router: Router) { }

  ngOnInit() {
    this.shoppingService.getProductMen().subscribe( response => {
      this.product=response;
    });
  }

  onSelect(pro){
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('/Men/MenProducts');
  }
}
