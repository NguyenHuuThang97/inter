import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { IProduct } from 'src/app/interfaces/product.interface';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  idProduct:string;
  result:IProduct;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  
    
    this.idProduct = localStorage.getItem('idProduct')
    console.log(this.idProduct);
    this.productService.getProduct(this.idProduct).subscribe((data) => {
      console.log(data);
      this.result = data
    });

  }

mua(){
  this.productService.mua(this.result);
}
remove(){
   this.productService.remove(this.result);
}
muahang(){
  this.productService.cart();
}
}
