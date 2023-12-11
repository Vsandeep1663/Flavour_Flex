import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private routes:Router){}
  ngOnInit(){}
  Images=
  [
    {
      src:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      alt:'image',
      title:'CAKE',
      btn:'readmore'
    },
    {
      src:'https://plus.unsplash.com/premium_photo-1661427159078-9d85039e99b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      alt:'image',
      title:'ICECREAM',
      btn:'readmore'
    },
    {
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsaBM4nwiQcvFslEixPOwWtSVlMEpk07J7tjvB6UY6Q&usqp=CAU&ec=48665698',
      alt:'image',
      title:'SWEETS',
      btn:'readmore'
    }
  ]

}
