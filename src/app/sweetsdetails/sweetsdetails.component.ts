import { Component, OnInit } from '@angular/core';
import { Sweets } from '../models/sweets';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetserviceService } from '../services/sweetservice.service';

@Component({
  selector: 'app-sweetsdetails',
  templateUrl: './sweetsdetails.component.html',
  styleUrls: ['./sweetsdetails.component.css']
})
export class SweetsdetailsComponent implements OnInit{
  details!:Sweets;
  constructor(private activatesRoute:ActivatedRoute,
    private sweetservice:SweetserviceService,
    private router:Router){
      activatesRoute.params.subscribe((params)=>{
        if(params['id']){
          this.details=sweetservice.getSweetsById(params['id'])
        }
      })
    }
    ngOnInit(): void {}
    addToCart(){}

}
