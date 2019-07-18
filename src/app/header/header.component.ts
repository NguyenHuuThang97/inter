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
  
   results: IProduct[] = [];
  isSearch: Boolean = false;  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }
  toggleSearch() {
    this.isSearch = !this.isSearch;
  }
  searchBook(title: string) {
  // this.results = this.productService.searchProduct(title);
  }

}
