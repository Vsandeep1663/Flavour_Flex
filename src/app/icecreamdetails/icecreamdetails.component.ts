import { Component, OnInit } from '@angular/core';
import { Icecream } from '../models/icecream';
import { ActivatedRoute, Router } from '@angular/router';
import { IcecreamservicesService } from '../services/icecreamservices.service';

@Component({
  selector: 'app-icecreamdetails',
  templateUrl: './icecreamdetails.component.html',
  styleUrls: ['./icecreamdetails.component.css']
})
export class IcecreamdetailsComponent implements OnInit{
  details!:Icecream;
  constructor(private activatedRoute:ActivatedRoute,
    private icecreameservice:IcecreamservicesService,
    private router:Router
    ){
      activatedRoute.params.subscribe((params)=>{
        if(params['id']){
          this.details=icecreameservice.getIcecreamById(params['id'])
        }
      })
    }
  ngOnInit(): void {}
  addToCart(){
    this.icecreameservice.addToCart(this.details);
    this.router.navigateByUrl('/cart')
  }


}
