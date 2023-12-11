import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Cake } from '../models/cake';
import { Cartitem } from '../models/cartitem';
import { Icecream } from '../models/icecream';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  // cartItems: any[] = [];

  // constructor() { }
  // addToCart(item:any){
  //   this.cartItems.push(item);
  // }
  // getCartItem(){
  //   return this.cartItems;
  // }
  private cart:Cart=new Cart()
  constructor(){}
  addToCart(cake:Cake,ice:Icecream):void{
    let cartItem= this.cart.items.find(item=>item.cake.id===cake.id &&item.ice.id===ice.id)
    if(cartItem){
      cartItem.quantity++;
    }
    else{
    this.cart.items.push(new Cartitem(cake,ice));
  }
  }
  removeFromCart(cakeId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.cake.id!=cakeId)
  }
  getCart():Cart{
    return this.cart;
  }
}
