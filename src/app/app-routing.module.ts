import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailComponent } from './detail/detail.component'
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'details/:id', component: DetailComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent},
    // { path: 'admin', component: AdminComponent},
    
    // { path: 'edit/:id', component: EditComponent},
    // { path: 'add', component:AddComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }