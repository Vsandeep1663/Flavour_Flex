import { Component, OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeservicesService } from '../services/cakeservices.service';
import { CartserviceService } from '../services/cartservice.service';
import { Icecream } from '../models/icecream';
import { IcecreamservicesService } from '../services/icecreamservices.service';
@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
  details!:Cake;
  ice!:Icecream;
  item:any;
  constructor(private activatedRoute:ActivatedRoute,
    private cakesevice:CakeservicesService,
    private cartservice:CartserviceService,
    private router:Router){
      activatedRoute.params.subscribe((params)=>{
        if(params['id']){
          this.details=cakesevice.getCakeById(params['id'])
        }
      })
    }
    ngOnInit(): void {
      
    }
    addToCart(cake:Cake,ice:Icecream){
      this.cartservice.addToCart(cake,ice);
      this.router.navigateByUrl('/cart')
    }

}
