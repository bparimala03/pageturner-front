import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavComponent } from '../home/top-nav/top-nav.component';
import { HomeSliderComponent } from '../home/home-slider/home-slider.component';
import { TopComponent } from '../top/top.component';
import { AppRoutingModule }     from './app-routing.module';
import { HomeMainComponent } from '../home/home-main/home-main.component';
import { FooterComponent } from '../home/footer/footer.component';
import { LoginSignupComponent } from '../login/login-signup/login-signup.component';
import { NewReleaseComponent } from '../top/new-release/new-release.component';
import { SideCategoryComponent } from '../home/side-category/side-category.component';
import { AdultsComponent } from '../top/adults/adults.component';
import { KidsBooksComponent } from '../top/kids-books/kids-books.component';
import { BestsellersComponent } from '../top/bestsellers/bestsellers.component';
import { BooksDetailsComponent } from '../top/books-details/books-details.component';
import { MycartComponent } from '../checkout/mycart/mycart.component';
import { PaymentComponent } from '../checkout/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeSliderComponent,
    HomeMainComponent,
    FooterComponent,
    LoginSignupComponent,
    NewReleaseComponent,
    SideCategoryComponent,
    AdultsComponent,
    KidsBooksComponent,
    BestsellersComponent,
    BooksDetailsComponent,
    TopComponent,
    MycartComponent,
    PaymentComponent ,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
