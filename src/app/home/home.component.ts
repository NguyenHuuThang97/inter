import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public results: IProduct[] = [];
  products: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.productService.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      data.map((newdata) => {
        newdata.anh = `http://localhost:5000/${newdata.anh}`;
      })
    })
  }
  onDetails(id){
    this.router.navigate([`/details/${id}`]);
  }
}
