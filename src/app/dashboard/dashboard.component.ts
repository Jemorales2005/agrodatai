import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../services/autenticar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarioSesion : any = localStorage.getItem('username');

  menuLateral: any = [
    { id:1, icono:'fa fa-home', titulo:'Tableros', link:'default', submenu:1, items_sub: [{icono_sub:'far fa-arrow-alt-circle-right', titulo_sub:'Opción 1',link_sub:'default'},{icono_sub:'far fa-arrow-alt-circle-right', titulo_sub:'Opción 2',link_sub:'default'}]},
    { id:2, icono:'fa fa-arrow-circle-right', titulo:'Mejor opción de venta', link:'mejor-opcion-venta', submenu:0, items_sub:[]},
    { id:3, icono:'fa fa-leaf', titulo:'Producción', link:'produccion', submenu:1, items_sub:[{icono_sub:'far fa-arrow-alt-circle-right', titulo_sub:'Opcion 1', link_sub:'produccion'}]},
    { id:4, icono:'fas fa-sun', titulo:'Clima', link:'clima', submenu:0, items_sub:[]},
    { id:5, icono:'fas fa-map-marker-alt', titulo:'Mapas', link:'mapas', submenu:0, items_sub:[]},
    { id:6, icono:'fas fa-spa', titulo:'Suelos', link:'suelos', submenu:0, items_sub:[]},
    { id:7, icono:'fas fa-money-check-alt', titulo:'Mercado', link:'mercado', submenu:0, items_sub:[]},
    { id:8, icono:'fa fa-chart-line', titulo:'Financiero', link:'financiero', submenu:0, items_sub:[]},
    { id:9, icono:'fas fa-bug', titulo:'Sanitario', link:'sanitario', submenu:0, items_sub:[]},
    { id:10, icono:'fa fa-exclamation-triangle', titulo:'Alertas', link:'alertas', submenu:0, items_sub:[]},
    { id:11, icono:'fas fa-exchange-alt', titulo:'Comparar', link:'comparar', submenu:0, items_sub:[]}
  ]

  constructor(private router: Router, private autenticarService: AutenticarService) { }

  ngOnInit() {
  }

  logout(){
      this.autenticarService.CerrarSesion(localStorage.getItem('token')).subscribe(res => {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.clear();
       this.router.navigate(['']);
     },
     error => {
       console.log(error);
     });
  }

}
