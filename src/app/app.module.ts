import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CardComponent } from './card/card.component';
import { CakeComponent } from './cake/cake.component';
import { IcecreameComponent } from './icecreame/icecreame.component';
import { IcecreamdetailsComponent } from './icecreamdetails/icecreamdetails.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ColouselComponent } from './colousel/colousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SweetsComponent } from './sweets/sweets.component';
import { SweetsdetailsComponent } from './sweetsdetails/sweetsdetails.component';
import { AddcartComponent } from './addcart/addcart.component';
import { LoginComponent } from './login/login.component';
import { BloginComponent } from './blogin/blogin.component';
import { BsignupComponent } from './bsignup/bsignup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BackeryhomeComponent } from './backeryhome/backeryhome.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CardComponent,
    CakeComponent,
    IcecreameComponent,
    IcecreamdetailsComponent,
    CakedetailsComponent,
    NavbarComponent,
    ColouselComponent,
    FooterComponent,
    HomeComponent,
    SweetsComponent,
    SweetsdetailsComponent,
    AddcartComponent,
    LoginComponent,
    BloginComponent,
    BsignupComponent,
    CheckoutComponent,
    PaymentComponent,
    SuccessComponent,
    AboutComponent,
    ContactComponent,
    BackeryhomeComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
