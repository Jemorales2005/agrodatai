import { Component, OnInit } from '@angular/core';

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
                    transable : 1,
                    centrales : [52, 4],
                    preciosTipo : 'corrientes',
                    periodo : 'anual',
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

  constructor() { }

  ngOnInit() {
  }

}
