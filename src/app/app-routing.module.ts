import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CakeComponent } from './cake/cake.component';
import { IcecreameComponent } from './icecreame/icecreame.component';
import { IcecreamdetailsComponent } from './icecreamdetails/icecreamdetails.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'CAKE',component:CakeComponent},
  {path:'SWEETS',component:SweetsComponent},
  {path:'ICECREAM',component:IcecreameComponent},
  {path:'icedetails/:id',component:IcecreamdetailsComponent},
  {path:'cakedetails/:id',component:CakedetailsComponent},
  {path:'sweetdetails/:id',component:SweetsdetailsComponent},
  {path:'cart',component:AddcartComponent},
  {path:'login',component:LoginComponent},
  {path:'blogin',component:BloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'bsignup',component:BsignupComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'payment',component:PaymentComponent},
  {path:'success',component:SuccessComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'backeryhome',component:BackeryhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
