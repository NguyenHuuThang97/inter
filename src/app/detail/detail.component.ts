import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ProductService} from '../service/product.service';
import {IProduct} from '../interfaces/product.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:string;
  results: IProduct[] = [];
  result: IProduct;
  shoppingCart = [];
  
  constructor(private productService:ProductService, private activatedRoute: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    // this.result.lengthProduct = 0;
    this.activatedRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');

      this.productService.getProduct(this.id).subscribe((data:IProduct) =>{
        this.result = data;
        // console.log(data)
        data.anh = `http://localhost:5000/${data.anh}`;
        // console.log(data.anh);
      });
    });

    
  }
  // mua(){
  //  this.productService.mua(this.result);
  // }
  // remove(){
  //   this.productService.remove(this.result);
  // }
  openCart(){
    this.router.navigate([`/shoppingcart/${this.result._id}`]);
    localStorage.setItem('idProduct',this.result._id);
    
  }
  cart(){
    this.productService.cart();
  }
}
