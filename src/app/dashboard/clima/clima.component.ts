import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../../services/autenticar.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  produceUsuario: any =  [
                  {
                    id_producto : 337,
                    nombre_producto : 'Banano criollo',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 0,
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
                               ],
                    dataLabelsClima : [1,2,3,4,5,6,7],
                    dataClima : [
                                  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Precipitación' },
                                  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Temperatura' },
                                  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Luminosidad' }
                                ],
                    graficarClima : 'on'
                  },
                  {
                    id_producto : 308,
                    nombre_producto : 'Carne de res',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 0,
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
                               ],
                    dataLabelsClima : [1,2,3,4,5,6,7],
                    dataClima : [
                                  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Precipitación' },
                                  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Temperatura' },
                                  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Luminosidad' }
                                ],
                    graficarClima : 'on'
                  }
                  ,
                  {
                    id_producto : 2,
                    nombre_producto : 'Carne de res, falda',
                    nombre_departamento : 'Cundinamarca',
                    nombre_municipio : 'Fusagasugá',
                    nombre_vereda : 'Guavio Alto',
                    transable : 1,
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
                               ],
                    dataLabelsClima : [1,2,3,4,5,6,7],
                    dataClima : [
                                  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Precipitación' },
                                  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Temperatura' },
                                  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Luminosidad' }
                                ],
                    graficarClima : 'on'
                  }
                ];

  constructor(private router: Router, private autenticarService: AutenticarService) { }

  ngOnInit() {
  }

  actualizarPeriodoClima(periodo,idproducto){
    this.actualizarParametrosBusqueda('periodoClima',periodo,idproducto);

    let data =
          {
            "from_date":null,
            "to_date":"1981-03-31",
            "stations":[15015060],
            "periodicity": periodo
          }
          //console.log(data);
             this.autenticarService.ActualizarValoresClima(data,localStorage.getItem('token')).subscribe(res => {
              console.log(res);
              this.construirArrayClima(idproducto,res['rows']);
              },
              error => {
                        console.log(error);
              });

  }

   construirArrayClima(idproducto,arrayParamsClima){
  let arraylabels:any=[];
  let arrayVresPrecipitacion:any=[];
  let arrayVresTemperatura:any=[];
  let arrayVresLuminosidad:any=[];
  let arrayData:any=[];
  let cont=1;
                         arrayParamsClima.map(function(paramsClima){

                              if(paramsClima.Tipo == 'PT'){
                                arrayVresPrecipitacion.push(parseInt(paramsClima.Valor));
                                arraylabels.push(cont); cont++;
                              }

                              if(paramsClima.Tipo == 'TS'){
                                arrayVresTemperatura.push(parseInt(paramsClima.Valor));
                              }

                              if(paramsClima.Tipo == 'BS'){
                                arrayVresLuminosidad.push(parseInt(paramsClima.Valor));
                              }

                         });
                         console.log(arrayVresPrecipitacion);
                         console.log(arrayVresTemperatura);
                         console.log(arrayVresLuminosidad);

                         arrayData.push({ data: arrayVresPrecipitacion, label: 'Precipitacion' });
                         arrayData.push({ data: arrayVresTemperatura, label: 'Temperatura' });
                         arrayData.push({ data: arrayVresLuminosidad, label: 'Luminosidad' });

                         console.log(arraylabels);
                         console.log(arrayData);

              this.produceUsuario.map(function(dato){
                if(dato.id_producto == idproducto){
                  cont=0;
                  dato.graficarClima='off';
                  dato.dataLabelsClima = arraylabels;
                  dato.dataClima = arrayData;
                  setTimeout(function(){ dato.graficarClima='on'; }, 50);
                }
                 return dato;
              });
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

}
