import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  idProduct: string;
  result: IProduct;
  formchinh: FormGroup;
  isCheck: boolean = false;
  hang:any = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.formchinh = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    })

    this.idProduct = localStorage.getItem('idProduct')
    console.log(this.idProduct);
    this.productService.getProduct(this.idProduct).subscribe((data) => {
      console.log(data);
      this.result = data
    });

  }
  onSubmit() {
    console.log(this.formchinh.value); //gia tri o form

  }
  them() {
    this.productService.mua(this.result);
  }
  remove() {
    this.productService.remove(this.result);
  }
  mua() {
    this.hang = localStorage.getItem('huhu');
    console.log(this.hang);
    
    // this.productService.giohang = [];
    // console.log(this.productService.giohang);
    // this.router.navigate(['home']);

  }
  xacnhanmua() {
    this.productService.cart();
    // this.router.navigate(['home']);
  }
}
