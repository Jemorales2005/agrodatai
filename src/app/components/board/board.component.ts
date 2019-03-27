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
  produceUsuario : any = [];
  dataGraph : any = [];
  dataArray : any = [];
  dataArrayCME : any = [];
  dataLabels : any = [];
  tipoPrecios : number = 0; //0: corrientes  1: constantes
  rangoConsulta : string = 'mensual';  //mensual, semanal, anual

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
                    transable : 1,
                    centrales : [52, 4]
                  },
                  {
                    id_producto : 308,
                    nombre_producto : 'Carne de res',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 1,
                    centrales : [27,79]
                  },
                  {
                    id_producto : 2,
                    nombre_producto : 'Carne de res, falda',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 0,
                    centrales : [33,62]
                  }
                ]

  constructor(private router: Router, private autenticarService: AutenticarService) {

 /* this.dataGraph={
                  dataLabels:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Sep','Oct','Nov','Dic'],
                  dataArray: [
                                {data: [0, 10, 20, 10, 40, 50, 20, 70, 30, 90, 80, 110], label: 'Series A'},
                                {data: [0, 11, 21, 31, 41, 51, 61, 71, 81, 91, 101, 111], label: 'Series B'},
                                {data: [0, 12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112], label: 'Series C'}
                             ]
                }*/
    //this.produceUsuario=this.datosUsuario['Que_Produce'];


  this.dataLabels=[1,2,3,4,5,6,7,8,9,10,11,12];
  this.dataArray=[
                  {data: [800,750,600,752,800,900,748,900,750,842,798,900], label: 'Central 1'},
                  {data: [810,730,630,752,810,905,752,910,750,842,798,880], label: 'Central 2'}
                 ]
  this.dataArrayCME=[
                  {data: [780,720,550,652,800,900,748,900,750,842,798,900], label: 'Bolsa'}
                 ]

    this.produceUsuario=this.jsonDashboard;
   }

  ngOnInit() {

        /* $(window).click(function () {
        alert('ok');
        });*/
  }

  logout(){
      this.autenticarService.CerrarSesion(localStorage.getItem('token')).subscribe(res => {
      //localStorage.removeItem('username');
      //localStorage.removeItem('token');
      localStorage.clear();
       this.router.navigate(['']);
     },
     error => {
       console.log(error);
     });
  }

  ActualizarPrecios(periodo,idproducto){
      this.rangoConsulta=periodo;
      console.log(this.rangoConsulta);
      var arrayProd = this.produceUsuario.find(o=>o.id_producto==idproducto);
      console.log(arrayProd['centrales']);
      let data =
          {
            "from_date": null,
            "to_date": "2019-01-01",
            "markets": arrayProd['centrales'],
            "products": [idproducto],
            "periodicity": periodo
          }
          console.log(data);
             this.autenticarService.ActualizarPreciosProducto(data,localStorage.getItem('token')).subscribe(res => {
              console.log(res);
              },
              error => {
                        console.log(error);
              });
  }
  actualizarTipoPrecio(tipo){
    this.tipoPrecios=tipo;
  }

}

