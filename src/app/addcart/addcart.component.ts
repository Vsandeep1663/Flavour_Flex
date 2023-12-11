import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { Cake } from '../models/cake';
import { Cart } from '../models/cart';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartitem } from '../models/cartitem';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  // cartItem:Cake[]=[]
  // constructor(private cartservice:CartserviceService){
  //   this.cartItem=this.cartservice.getCartItem();
  // }
  cart!:Cart;
  cake!:Cake;

  constructor(private cartservice:CartserviceService,
    private activatedroute:ActivatedRoute,
    private route:Router){
      this.setCart();
    }
    ngOnInit(): void {
      
    }
    setCart(){
      this.cart=this.cartservice.getCart();
    }
    removeFromCart(cartItem:Cartitem):void{
      this.cartservice.removeFromCart(cartItem.cake.id);
      this.setCart();
    }

    onclick(){
      this.route.navigateByUrl('checkout')
    }
    Request(){
      
    }

}
