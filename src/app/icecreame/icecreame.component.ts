import { Component } from '@angular/core';
import { IcecreamservicesService } from '../services/icecreamservices.service';
import { Icecream } from '../models/icecream';

@Component({
  selector: 'app-icecreame',
  templateUrl: './icecreame.component.html',
  styleUrls: ['./icecreame.component.css']
})
export class IcecreameComponent {
  ice:Icecream[]=[];
  constructor(private service:IcecreamservicesService){}
  ngOnInit():void{
    this.ice=this.service.getIcecreamlist();
  }
  

}
