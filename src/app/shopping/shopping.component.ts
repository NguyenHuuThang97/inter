import { Component, OnInit } from '@angular/core';

import { ProductService } from '../service/product.service';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Router } from '@angular/router';
import  { ICustomer } from 'src/app/interfaces/customer.interface'
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
    console.log(this.items);
    this.items.forEach(element => {
      console.log(element);
      
    });
    // this.items = this.items.map(e => e['id']).map((e,i,arr)=>arr.indexOf(e)===i && i).filter(e => this.items[e]).map(e => data[e]);
   // console.log(this. items);
    
    this.formchinh = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    })

    this.productService.getProduct(this.idProduct).subscribe((data) => {
      this.result = data
      data.anh = `http://localhost:5000/${data.anh}`;
      console.log(this.result);

    });

  }
  onSubmit() {
    console.log(this.formchinh.value); //gia tri o form

  }
  them() {
    this.productService.mua(this.result);
    // lengthProduct++;
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
  // xacnhanmua() {
  //   this.productService.cart();
  //   // this.router.navigate(['home']);
  // }
  thanhtoan(){
   this.productService.createCustomer(this.formchinh.value).subscribe((response) =>{
     if(response){
        alert("Thanh toán thành công");
        this.router.navigate(["home"]);
     }
   }),err =>{
      if(err.status === 404){
        alert(err.error.message)
      }
   }
   
   this.productService.createOderDetail(this.items.element).subscribe((res) =>{
     console.log(res);
     
   })

  }
  removePro(idProduct){
    this.items.splice(this.items.indexOf(idProduct), 1);
    localStorage.setItem('huhu',JSON.stringify(this.items));
  }
}
