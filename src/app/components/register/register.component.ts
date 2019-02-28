import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

agricultorProductos: any = [
 { nombre:'Papa Capira', departamento: 'Boyaca', municipio: 'Paipa', vereda: 'Vereda1', latd:4.6560663, lngd:-74.0595918},
 { nombre:'Papa Capira2', departamento: 'Boyaca', municipio: 'Paipa', vereda: 'Vereda2', latd:4.6708359, lngd:-74.0554836},
 { nombre:'Papa Capira3', departamento: 'Boyaca', municipio: 'Paipa', vereda: 'Vereda3', latd:4.6904, lngd:-74.0451019},
 { nombre:'Papa Capira4', departamento: 'Boyaca', municipio: 'Paipa', vereda: 'Vereda4', latd:4.6689621, lngd:-74.0577666}
                           ]
  lat: number = 4.6560663;
  lng: number = -74.0595918;

  constructor() { }

  ngOnInit() {
  }

}
