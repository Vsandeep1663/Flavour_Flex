import { Component } from '@angular/core';
import { Cake } from '../models/cake';
import { CakeservicesService } from '../services/cakeservices.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent {
  cake:Cake[]=[];
  constructor(private service:CakeservicesService){}
  ngOnInit():void{
    this.cake=this.service.getCakelist();
  }
}
