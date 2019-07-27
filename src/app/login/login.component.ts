import { Component, OnInit } from '@angular/core';
import {ProductService} from'../service/product.service';
import {User} from '../interfaces/user.interface'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private userService:ProductService) { }

  ngOnInit() {
  }
  onLogin( username,password){
    const user: User = {
      email: username,
      hash_password: password
    }
    this.userService.onLogin(user).subscribe((res) =>{
      console.log(res);
      if(res){
        localStorage.setItem('user',JSON.stringify(res));
        this.router.navigate(['home']);
      }
    }), err =>{
      if(err){
        alert("Sai thông tin đăng nhập! vui lòng kiểm tra lại");
      }
    }
  }
}
