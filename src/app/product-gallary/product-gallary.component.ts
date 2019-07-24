import { Component, OnInit } from '@angular/core';
import { Products } from '../interface/products';
@Component({
  selector: 'app-product-gallary',
  templateUrl: './product-gallary.component.html',
  styleUrls: ['./product-gallary.component.css']
})
export class ProductGallaryComponent implements OnInit {

  imageSrc = '';
  messageText = '';
  public prod: Products;
  imageButtons:Array<object>=[];

  constructor() { }

  ngOnInit() {
    this.prod=JSON.parse(sessionStorage.getItem('pro'));
    this.imageButtons = [{ src: this.prod.image, src1: this.prod.t_image_1 },
      { src: this.prod.image_2, src1: this.prod.t_image_2 },
      { src: this.prod.image_3, src1: this.prod.t_image_3 }];
    this.imageSrc = this.prod.image;
  }
  onClick(n) {
    this.imageSrc = n.src;
  }
}
