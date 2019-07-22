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
    giohang=[] 
    Port = 'http://localhost';
    constructor(private http: HttpClient){}
    mua(sanpham:IProduct){
        if(this.giohang.indexOf(sanpham)== -1){
            this.giohang.push(sanpham);
            sanpham.lengthProduct = 1;
            console.log(sanpham); 
        }else{
           sanpham.lengthProduct++;
           console.log(sanpham.lengthProduct);
           
        }
        
    }
    remove(sanpham){
        if(this.giohang.indexOf(sanpham) > -1 && sanpham.lengthProduct > 1){
            sanpham.lengthProduct--;
            console.log(sanpham.lengthProduct);
            
        }
        else if(this.giohang.indexOf(sanpham) >-1){
            const index = this.giohang.indexOf(sanpham);
            if(index !== -1){
                this.giohang.splice(index,1);
            }
            console.log(this.giohang);
        }
        else{
            console.error('het san pham roi ma oi ')
        }
    }
    cart(){
        localStorage.setItem('huhu',JSON.stringify(this.giohang));
        // var count = this.giohang.length;
        // console.log(count);
      }
   
    getProducts():Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.Port}:5000/api/product/allProduct`).pipe(map(res => {
            // console.log(res);
            return res;
        }));
    }
    getProduct(id:string):Observable<IProduct>{
        
        return this.http.get<IProduct>(`${this.Port}:5000/api/product/oneProduct/${id}`).pipe(map(res => {
            //console.log(res);
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
