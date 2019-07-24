import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-women',
  templateUrl: './product-women.component.html',
  styleUrls: ['./product-women.component.css']
})
export class ProductWomenComponent implements OnInit {
  public product: any=[];


  constructor(public shoppingService: ShoppingService, public router: Router) { }

  ngOnInit() {
    this.shoppingService.getProductWomen().subscribe( response => {
      this.product=response;
    });
  }

  onSelect(pro){
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('Women/WomenProduct');
  }
}
