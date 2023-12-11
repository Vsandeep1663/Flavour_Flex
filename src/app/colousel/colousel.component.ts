import { Component } from '@angular/core';

@Component({
  selector: 'app-colousel',
  templateUrl: './colousel.component.html',
  styleUrls: ['./colousel.component.css']
})
export class ColouselComponent {
  public images =[
    {
      src:'../../src/assets/images/cakes(corousel).jpeg',
    },
    {
      src:'../../src/assets/images/icecream(corousel).jpeg',
    },
    {
      src:'../../src/assets/images/softdrinks(corousel).jpeg',
    }
  ]


}
