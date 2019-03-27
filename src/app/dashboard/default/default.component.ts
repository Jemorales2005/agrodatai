import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../../services/autenticar.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  dataGraph : any = [];
  dataArray : any = [];
  dataLabels : any = [];
  arrayCentral: any = [];

  produceUsuario: any =  [
                  {
                    id_producto : 337,
                    nombre_producto : 'Banano criollo',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 1,
                    centrales : [52, 4],
                    preciosTipo : 'corrientes',
                    periodo : 'anual',
                    periodoClima : 'semanal',
                    graficar : 'on',
                    datalabels :[1,2,3,4,5],
                     dataCorrientes : [
                                {data: [2052,2112,2155,2302,2358], label: 'Central 1'},
                                {data: [2513,2192,2018,2518,2700], label: 'Central 2'}
                               ],
                    dataConstantes : [
                                {data: [0,2183,2495,2342,2469], label: 'Central 1'},
                                {data: [2631,2229,2337,0,2791], label: 'Central 2'}
                               ]
                  },
                  {
                    id_producto : 308,
                    nombre_producto : 'Carne de res',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 1,
                    centrales : [27,79],
                    preciosTipo : 'corrientes',
                    periodo : 'anual',
                    periodoClima : 'semanal',
                    graficar : 'on',
                    datalabels :[1,2,3,4,5],
                     dataCorrientes : [
                                {data: [1894,843,2195,1921,1550], label: 'Central 1'},
                                {data: [1768,861,2014,1940,1623], label: 'Central 2'}
                               ],
                    dataConstantes : [
                                {data: [1958,883,2542,1954,0], label: 'Central 1'},
                                {data: [1827,901,2332,1974,0], label: 'Central 2'}
                               ]
                  }
                  ,
                  {
                    id_producto : 2,
                    nombre_producto : 'Carne de res, falda',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 0,
                    centrales : [33,62],
                    preciosTipo : 'corrientes',
                    periodo : 'anual',
                    periodoClima : 'semanal',
                    graficar : 'on',
                    datalabels :[1,2,3,4,5],
                    dataCorrientes : [
                                {data: [1216,1611,927,1484,978], label: 'Central 1'},
                                {data: [819,1101,1296,1344,803], label: 'Central 2'}
                               ],
                    dataConstantes : [
                                {data: [1236,0,958,1553,1132], label: 'Central 1'},
                                {data: [846,1120,1356,0,929], label: 'Central 2'}
                               ]
                  }
                ];
  dataArrayCME: any =  [
                        {data: [780,720,550,652,800,900,748,900,750,842,798,900], label: 'Bolsa'}
                       ]

  constructor(private router: Router, private autenticarService: AutenticarService) {}

  ngOnInit() {}

  actualizarPeriodoPrecios(periodo,idproducto){

      this.actualizarParametrosBusqueda('periodo',periodo,idproducto);
      var arrayProd = this.produceUsuario.find(o=>o.id_producto==idproducto);

      let data =
          {
            "from_date": null,
            "to_date": "2019-01-01",
            "markets": arrayProd['centrales'],
            "products": [idproducto],
            "periodicity": periodo
          }
          //console.log(data);
             this.autenticarService.ActualizarPreciosProducto(data,localStorage.getItem('token')).subscribe(res => {
              //console.log(res);
              this.construirArrayPreciosProducto(idproducto,res['rows']);
              },
              error => {
                        console.log(error);
              });
  }

  actualizarPeriodoClima(periodo,idproducto){
    this.actualizarParametrosBusqueda('periodoClima',periodo,idproducto);

    let data =
          {
            "from_date":null,
            "to_date":"1981-03-31",
            "stations":[47010070],
            "periodicity":"mensual"
          }
          //console.log(data);
             this.autenticarService.ActualizarValoresClima(data,localStorage.getItem('token')).subscribe(res => {
              console.log(res);
              },
              error => {
                        console.log(error);
              });

  }

  actualizarTipoPrecio(tipo,idproducto){
    this.actualizarParametrosBusqueda('precios',tipo,idproducto);
    console.log(this.produceUsuario);
  }

  actualizarParametrosBusqueda(tipo,rango,idproducto){
    switch (tipo) {
      case 'periodo':
              this.produceUsuario.map(function(dato){
                if(dato.id_producto == idproducto){ dato.periodo = rango;}
                 return dato;
              });
      break;
      case 'precios':
              this.produceUsuario.map(function(dato){
                if(dato.id_producto == idproducto){ dato.preciosTipo = rango;}
                 return dato;
              });
      break;
      case 'periodoClima':
              this.produceUsuario.map(function(dato){
                if(dato.id_producto == idproducto){ dato.periodoClima = rango;}
                 return dato;
              });
      break;
      default:
      break;
    }
  }

  construirArrayPreciosProducto(idproducto,matrizPrecios){
  let arraylabels:any;
  let arrayPreciosConstantes:any;
  let arrayPreciosCorrientes:any;
  let arrayDataConstantes:any;
  let arrayDataCorrientes:any;
  let cont=0;

      this.produceUsuario.map(function(dato){
          if(dato.id_producto == idproducto){
               dato.graficar='off';
               arrayDataConstantes=[];
               arrayDataCorrientes=[];
               let n=0;

                 for(let i = 0; i < dato.centrales.length; i++){ n++;
                   //inicia construcción array de precios de acuerdo a la central
                   arrayPreciosConstantes=[];
                   arrayPreciosCorrientes=[];
                   arraylabels=[];
                   cont=0;
                         matrizPrecios.map(function(precio){

                           if(precio.id_mayorista==dato.centrales[i])
                           {
                              cont++;
                              arraylabels.push(cont);

                              if(precio.Precio_IPP2018 != null){ //evitar el Nan como resultado
                                arrayPreciosConstantes.push(parseInt(precio.Precio_IPP2018));
                              } else {
                                arrayPreciosConstantes.push(0);
                              }

                              if(precio.precio != null){
                                arrayPreciosCorrientes.push(parseInt(precio.precio));
                              } else {
                                arrayPreciosCorrientes.push(0);
                              }
                           }
                         });
                  arrayDataConstantes.push({ data: arrayPreciosConstantes, label: 'Central '+n });
                  arrayDataCorrientes.push({ data: arrayPreciosCorrientes, label: 'Central '+n });
                  //fin construcción array de precios de acuerdo a la central
                }
          }
      });

      this.produceUsuario.map(function(dato){
                if(dato.id_producto == idproducto){
                  cont=0;

                  console.log(arrayDataCorrientes);
                  console.log(arrayDataConstantes);
                  dato.datalabels = arraylabels;
                  dato.dataCorrientes = arrayDataCorrientes;
                  dato.dataConstantes = arrayDataConstantes;
                  setTimeout(function(){ dato.graficar='on'; }, 50);

                }
                 return dato;
              });
  }

}
