import { Component } from '@angular/core';
import { Sweets } from '../models/sweets';
import { SweetserviceService } from '../services/sweetservice.service';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.css']
})
export class SweetsComponent {
  sweets:Sweets[]=[];
  constructor(private service:SweetserviceService){}
  ngOnInit():void{
    this.sweets=this.service.getSweetlist();
  }

}
