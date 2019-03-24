import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../../services/autenticar.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  produceUsuario : any = [];
  dataGraph : any = [];
  dataArray : any = [];
  dataArrayCME : any = [];
  dataLabels : any = [];
  tipoPrecios : number = 0; //0: corrientes  1: constantes
  rangoConsulta : string = 'mensual';  //mensual, semanal, anual

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
                ];

  constructor(private router: Router, private autenticarService: AutenticarService) {
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
