import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   latitude: number = 51.678418;
  longitude: number = 7.809007;
  locationChosen = false;

  onChoseLocation(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    /*console.log(this.locationChosen);
    console.log(this.latitude);
    console.log(this.longitude);*/
  }

  constructor() { }

  ngOnInit() {
  }

}
