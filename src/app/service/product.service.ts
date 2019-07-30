import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProduct } from '../interfaces/product.interface';
import { User } from '../interfaces/user.interface';
import {ICustomer} from '../interfaces/customer.interface';
import {IOderDetail} from '../interfaces/oderdetail.interface';
@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products: IProduct[] = [];
    giohang = []
    Port = 'http://localhost';
    constructor(private http: HttpClient) { }
    mua(sanpham: IProduct) {
        if (this.giohang.indexOf(sanpham) == -1 || sanpham.lengthProduct == -1) {
            this.giohang.push(sanpham);
            sanpham.lengthProduct = 1;
            console.log(sanpham);
        } else {
            sanpham.lengthProduct++;
            console.log(sanpham.lengthProduct);

        }

    }
    remove(sanpham) {
        if (this.giohang.indexOf(sanpham) > -1 && sanpham.lengthProduct > 1) {
            sanpham.lengthProduct--;
            console.log(sanpham.lengthProduct);

        }
        else if (this.giohang.indexOf(sanpham) > -1) {
            const index = this.giohang.indexOf(sanpham);
            if (index !== -1) {
                this.giohang.splice(index, 1);
            }
            console.log(this.giohang);
        }
        else {
            console.error('het san pham roi ma oi ')
        }
    }

    cart(sanpham: any) {
        if (localStorage.getItem('huhu')) {
            if (this.giohang.indexOf(sanpham) > 0) {
                for (var i = 0; i < this.giohang.length - 1; i++)
                    for (var j = i + 1; j < this.giohang.length; j++)
                        if (this.giohang[i]._id == this.giohang[j]._id) {
                            this.giohang[i].lengthProduct += this.giohang[j].lengthProduct
                        }
                // for (var i = 0; i < this.giohang.length; i++) {
                //     if (this.giohang[i]._id == this.giohang[i++]._id) {


                //         this.giohang[i].lengthProduct += this.giohang[i + 1].lengthProduct;
                //         // this.giohang.splice(i + 1, 1);
                //     } else {
                //         this.giohang.push(sanpham)
                //     }
                // }
            } else {
                this.giohang.push(sanpham)
            }

        } else {
            this.giohang.push(sanpham);
        }
        this.giohang = this.giohang.map(e => e['_id']).map((e, i, arr) => arr.indexOf(e) === i && i).filter(e => this.giohang[e]).map(e => this.giohang[e]);
        localStorage.setItem('huhu', JSON.stringify(this.giohang));

    }
    removeProduct(idProduct) {
        return this.http.delete(`${this.Port}:5000/api/product/delete/${idProduct}`);
    }
    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.Port}:5000/api/product/allProduct`).pipe(map(res => {
            // console.log(res);
            return res;
        }));
    }
    getProduct(id: string): Observable<IProduct> {

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
    onLogin(user: User): Observable<User> {
        return this.http.post<User>(`${this.Port}:5000/api/user/sign`, user);
    }

    createCustomer(customer:ICustomer):Observable<ICustomer>{
        return this.http.post<ICustomer>(`${this.Port}:5000/api/customer/create`,customer);
    }
    createOderDetail(oderdetail:IOderDetail):Observable<IOderDetail>{
        return this.http.post<IOderDetail>(`${this.Port}:5000/api/oderDetail/create`,oderdetail);
    }
}
