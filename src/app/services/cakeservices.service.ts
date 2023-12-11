import { Injectable } from '@angular/core';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root'
})
export class CakeservicesService {

  constructor() { }
  getCakeById(id:number):Cake{
    return this.getCakelist().find(Cake=>Cake.id==id)!;
  }
  getCakelist():Cake[]{
    return[
      {
        id:1,
        src:'../assets/images/black-forest-cake.jpg',
        alt:'Image',
        title:'Black-Forest',
        desc:'Black Forest Cake online from High-Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:2,
        src:'../assets/images/butterscotch-cake.jpg',
        alt:'Image',
        title:'Butterscotch',
        desc:'Butterscotch Cake online from High-Quality Bakery in your Cities is a Rich, Delicious, Hygienically  prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India ',
        price: 650,
        btn:''


      },
      {
        id:3,
        src:'../assets/images/chocolate-truffle.jpg',
        alt:'Image',
        title:'Chocolate-truffle',
        desc:'Chocolate Truffle Cake online from High-Quality Bakery in your Cities is a Rich, Delicious, Hygienically  prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India',
        price: 650,
        btn:''


      },
      {
        id:4,
        src:'../assets/images/mixed-fruit-cake.jpg',
        alt:'Image',
        title:'Mixed-Fruit',
        desc:'Mixed-Fruit online from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:5,
        src:'../assets/images/red-velvet-cake.jpg',
        alt:'Image',
        title:'Red-Velvet',
        desc:'Red-Velvet online from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:6,
        src:'../assets/images/vanilla-cake.jpg',
        alt:'Image',
        title:'Vanilla',
        desc:'Red-Velvet online from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:7,
        src:'../assets/images/white-forest-cake.jpg',
        alt:'Image',
        title:'White-Forest',
        desc:'White-Forest online from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
      {
        id:8,
        src:'../assets/images/heart-shape-chocolate-truffle.jpg',
        alt:'Image',
        title:'HeartShape Chocolate',
        desc:'HeartShape Chocolate online from High Quality Bakery in your Cities is a Rich, Delicious, Hygienically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Wedding, Anniversary, Festivals and on all Occasion, free home delivery across India.',
        price: 650,
        btn:''


      },
    ]
  }
}
