import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isSearch: Boolean = false;  
   results:IProduct[] = [];
   products: IProduct[] = [];
   textSearch: string;
   items:any =[];
  constructor(private productService: ProductService, private router: Router) { }
  
  ngOnInit() {
    var data = JSON.parse(`${localStorage.getItem('huhu')}`);
    this.items = data;
    console.log(this.items.length);
    // this.getData();
  //  console.log( this.products.length);
  }
  toggleSearch() {
    this.isSearch = !this.isSearch;
  }
  searchProduct(title: string) {
    //  this.results = this.productService.searchProduct(title);
  }
  getValueProduct(data){
    this.router.navigate([`/details/${data._id}`]);
  }
  noneSearch(){
    this.products = []
    console.log(this.products);
    
  }
  getData() {
    this.products = [];
    if(this.textSearch != ''){
      this.productService.getProducts().subscribe((data) => {
        this.products = data;
        console.log(this.products.length);
        data.map((newdata) => {
          newdata.anh = `http://localhost:5000/${newdata.anh}`;
        })
      })
    }
  
  }
  onShop(){
    this.router.navigate(['shoppingcart']);
  }
  onHome(){
    this.router.navigate(['home']);
  }

}
