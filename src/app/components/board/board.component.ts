import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../../services/autenticar.service';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lat: number = 4.6560663;
  lng: number = -74.0595918;
  usuarioSesion : any = localStorage.getItem('username');
  datosUsuario : any = JSON.parse(localStorage.getItem('datosUser'));
  produceUsuario: any = [];
  menuLateral: any = [
    { id:1, icono:'fa fa-home', titulo:'Tableros', submenu:1, items_sub: [{icono_sub:'far fa-arrow-alt-circle-right', titulo_sub:'Opción 1'},{icono_sub:'far fa-arrow-alt-circle-right', titulo_sub:'Opción 2'}]},
    { id:2, icono:'fa fa-arrow-circle-right', titulo:'Mejor opción de venta', submenu:0, items_sub:[]},
    { id:3, icono:'fa fa-leaf', titulo:'Producción', submenu:1, items_sub:[{icono_sub:'far fa-arrow-alt-circle-right', titulo_sub:'Opcion 1'}]},
    { id:4, icono:'fas fa-sun', titulo:'Clima', submenu:0, items_sub:[]},
    { id:5, icono:'fas fa-map-marker-alt', titulo:'Mapas', submenu:0, items_sub:[]},
    { id:6, icono:'fas fa-spa', titulo:'Suelos', submenu:0, items_sub:[]},
    { id:7, icono:'fas fa-money-check-alt', titulo:'Mercado', submenu:0, items_sub:[]},
    { id:8, icono:'fa fa-chart-line', titulo:'Financiero', submenu:0, items_sub:[]},
    { id:9, icono:'fas fa-bug', titulo:'Sanitario', submenu:0, items_sub:[]},
    { id:10, icono:'fa fa-exclamation-triangle', titulo:'Alertas', submenu:0, items_sub:[]},
    { id:11, icono:'fas fa-exchange-alt', titulo:'Comparar', submenu:0, items_sub:[]}
  ]

  jsonDashboard: any =  [
                  {
                    id_producto : 337,
                    nombre_producto : 'Banano criollo',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 1
                  },
                  {
                    id_producto : 308,
                    nombre_producto : 'Carne de res',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 1
                  },
                  {
                    id_producto : 2,
                    nombre_producto : 'Carne de res, falda',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 0
                  }
                ]

  constructor(private router: Router, private autenticarService: AutenticarService) {
    //this.produceUsuario=this.datosUsuario['Que_Produce'];
    this.produceUsuario=this.jsonDashboard;
    console.log(this.produceUsuario);
   }

  ngOnInit() {
       /* $(window).click(function () {
        alert('ok');
        });*/
  }

  logout(){
      //console.log(localStorage.getItem('token'));

      this.autenticarService.CerrarSesion(localStorage.getItem('token')).subscribe(res => {
      //console.log(res);
      localStorage.removeItem('username');
      localStorage.removeItem('token');
       this.router.navigate(['']);
     },
     error => {
       console.log(error);
     });
  }


}

