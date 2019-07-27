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
  items:any = [];
  bill:any = {};
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    var data = JSON.parse(`${localStorage.getItem('huhu')}`);
    this. items= data;  
    console.log(data.length);
   // console.log(this. items);
    
    this.formchinh = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    })

    // this.idProduct = localStorage.getItem('idProduct')
    // console.log(this.idProduct);
    this.productService.getProduct(this.idProduct).subscribe((data) => {
      // console.log(data);
      this.result = data
      data.anh = `http://localhost:5000/${data.anh}`;
      console.log(this.result);

    });

  }
  onSubmit() {
    console.log(this.formchinh.value); //gia tri o form

  }
  them(lengthProduct) {
    this.productService.mua(this.result);
    lengthProduct++;
  }
  remove() {
    this.productService.remove(this.result);
  }
  mua() {
    this. items = localStorage.getItem('huhu');
    console.log(this. items);
    
    // this.productService.giohang = [];
    // console.log(this.productService.giohang);
    // this.router.navigate(['home']);

  }
  xacnhanmua() {
    this.productService.cart();
    // this.router.navigate(['home']);
  }
  thanhtoan(){
    this.bill = {
      custormer:this.formchinh.value,
      shoppingcart:this.items
    }
    console.log(this.bill);
    
  }
  removePro(idProduct){
    this.items.splice(this.items.indexOf(idProduct), 1);
    localStorage.setItem('huhu',JSON.stringify(this.items));
  }
}
