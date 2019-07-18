import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { IProduct} from '../interfaces/product.interface'
@Injectable({
    providedIn: 'root'
  })

export class ProductService{
    products: IProduct[] = [];

    Port = 'http://localhost';
    constructor(private http: HttpClient){}
    
    getProducts():Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.Port}:5000/api/product/allProduct`).pipe(map(res => {
            console.log(res);
            return res;
        }));
    }
    getProduct(id:string):Observable<IProduct>{
        
        return this.http.get<IProduct>(`${this.Port}:5000/api/product/oneProduct/${id}`).pipe(map(res => {
            console.log(res);
            return res;
        }));;
    }
    searchProduct(title: string) {
        return this.getProducts().pipe(map(products => {
          return products.filter(product => {
            return product.ten.toLowerCase().includes(title.toLowerCase());
          });
        }));
      }
    
}
