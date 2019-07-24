import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-brands',
  templateUrl: './product-brands.component.html',
  styleUrls: ['./product-brands.component.css']
})
export class ProductBrandsComponent implements OnInit {

  public product: any=[];


  constructor(public shoppingService: ShoppingService, public router: Router) { }

  ngOnInit() {
    this.shoppingService.getProductBrand().subscribe( response => {
      this.product=response;
    });
  }

  onSelect(pro){
    if(pro.id == '01' || pro.id == '05' || pro.id == '07')
    {
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('Brands/MenBrands');
    }
    if(pro.id == '02' || pro.id == '03')
    {
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('Brands/Accessory');
    }
    if(pro.id == '04' || pro.id == '06' || pro.id == '08')
    {
    sessionStorage.setItem('pro', JSON.stringify(pro));
    this.router.navigateByUrl('Brands/WomenBrands');
    }
  }
}
