import { Cake } from "./cake"
import { Icecream } from "./icecream";

export class Cartitem {
    cake: Cake;
    ice:Icecream;
    quantity:1;

    constructor(cake:Cake,ice:Icecream){
        this.cake=cake;
        this.ice=ice;
        this.quantity = 1;
    }
}
