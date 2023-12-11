import { Injectable } from '@angular/core';
import { Sweets } from '../models/sweets';

@Injectable({
  providedIn: 'root'
})
export class SweetserviceService {

  constructor() { }
  getSweetsById(id:number):Sweets{
    return this.getSweetlist().find(Sweets=>Sweets.id==id)!;
  }
  getSweetlist():Sweets[]{
    return[
      {
        id:1,
        src:'../assets/images/badam-mysore-pauk.jpg',
        alt:'Image',
        title:'Badam Mysore Pauk',
        desc:'Badam Mysore Pauk is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:2,
        src:'../assets/images/boondhi-laddu.jpg',
        alt:'Image',
        title:'Boondi Laddu',
        desc:'Boondi Laddu is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:3,
        src:'../assets/images/dry-fruit-laddu.jpg',
        alt:'Image',
        title:'Dry Fruit Laddu',
        desc:'Dry Fruit Laddu is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:4,
        src:'../assets/images/Gulab-Jamun.jpg',
        alt:'Image',
        title:'Gulab Jamun',
        desc:'Gulab Jamun is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:5,
        src:'../assets/images/Jangri.jpg',
        alt:'Image',
        title:'Jangri',
        desc:'Jangri is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:6,
        src:'../assets/images/kaju-apple.jpg',
        alt:'Image',
        title:'Kaju Apple',
        desc:'Kaju Apple is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:7,
        src:'../assets/images/kaju-katli.jpg',
        alt:'Image',
        title:'Kaju Katli',
        desc:'Kaju Katli is a rich and delicious mouth watering dryfruit sweet made from good quality cashew nuts and rich ingredients.Kaju Katli is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:8,
        src:'../assets/images/kalakand.jpg',
        alt:'Image',
        title:'Kalakanda',
        desc:'Kalakanda is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:9,
        src:'../assets/images/milk-burfi.jpg',
        alt:'Image',
        title:'Milk Burfi',
        desc:'Milk Burfi is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:10,
        src:'../assets/images/milk-mysore-pack.jpg',
        alt:'Image',
        title:'Milk Mysore Pak',
        desc:'Milk Mysore Pak is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:11,
        src:'../assets/images/milk-sweet.jpg',
        alt:'Image',
        title:'Milk Sweet',
        desc:'Milk Sweet is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:12,
        src:'../assets/images/mothichoor-ladoo.jpg',
        alt:'Image',
        title:'Mothichoor Laddu',
        desc:'Mothichoor Laddu is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },
      {
        id:13,
        src:'../assets/images/mysore-pak.jpg',
        alt:'Image',
        title:'Mysore Pak',
        desc:'Mysore Pak is a rich and delicious mouth watering sweet made from good quality dryfruits and rich ingredients. It is a Rich, Delicious, Hyginically prepared and is a perfect choice to your dears to make them Happier on Birthdays, Festivals and on all Occasion.',
        price: 650,
        btn:''


      },

    ]

  }
}
