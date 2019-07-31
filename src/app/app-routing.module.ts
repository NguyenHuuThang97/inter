import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent } from './detail/detail.component'
import {LoginComponent} from './login/login.component'
import {AdminComponent} from './admin/admin.component'
import { ShoppingComponent } from 'src/app/shopping/shopping.component';
// import {AddProductComponent} from './add-product/add-product.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'details/:id', component: DetailComponent },
    { path: 'shoppingcart', component: ShoppingComponent },
     { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent},
     { path: 'admin', component: AdminComponent,
     children: [
      //  { path: 'add', component: AddProductComponent },
      //  { path: 'edit', component:AddProductComponent }
     ]
},
    
    // { path: 'edit/:id', component: EditComponent},
    // { path: 'add', component:AddProductComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }