import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public image  = "../../assets/images/Logo.png";
  constructor(private routes:Router){

  }
  ngOnInit(){

  }
  onclick(){
    this.routes.navigateByUrl('/login')

  }


}
