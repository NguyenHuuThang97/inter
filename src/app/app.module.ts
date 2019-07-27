import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CarouselModule } from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {ToastrModule} from 'ngx-toastr'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ProductService} from './service/product.service';
import { ShoppingComponent } from './shopping/shopping.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    ShoppingComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule, 
    Ng2SearchPipeModule
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
