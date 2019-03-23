declare const google: any;
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../../services/autenticar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


private map = null;
public markers : any = [];
public polygono;
public marker;
public drawingManager;
public drawingpolygono;
public polygon;
lat: number = 4.6560663;
lng: number = -74.0595918;
////datos basicos productor/////
nombres : string = '';
apellidos : string = '';
identificacion : number = null;
telefono : number = null;
direccion : string = null;
email : string = null;
username : string = null;
password : string = null;
passwordConfirm : string = null;
///////datos que produce//////
producto : string = null;
departamento : any = null;
municipio : string = null;
vereda : string = null;
idEmpresa : number = null;

divTipoPerfil: number = 0;
divTipoProductor: number = 0;
divProduce: number = 0;
divCultivosProductor: number = 0;  //0:listar  1:Adicionar
agricultorProductos: any = [];
listaProductos: any = [];
pathPolygon : any = [];
pathMiUbicacion : any = [];
listaDepartamentos: any = [];
listaMunicipiosDepto : any = [];
listaVeredasMncpio : any = [];
codigoDaneDepartamento: string = null;
codigoDaneMunicipio: string = null;
codigoDaneVereda: string = null;

tiposPerfiles: any = [
 {idPerfil:1, nombrePerfil:'Productor'},
 {idPerfil:2, nombrePerfil:'Financiero'},
 {idPerfil:3, nombrePerfil:'Politicas Publicas'},
 {idPerfil:4, nombrePerfil:'Proveedor'},
 {idPerfil:5, nombrePerfil:'Comercializador'}
                     ]

tiposProductor: any = [
 {idProductor:1, nombreProductor:'Persona'},
 {idProductor:2, nombreProductor:'Empresa'}
                      ]

  constructor(private router: Router, private autenticarService: AutenticarService) { }

  ngOnInit() {}

  onChangeDependientes(event:any,Tipo){
  switch (Tipo) {
  case 'Departamento':
        this.codigoDaneDepartamento=event.target.value;
      //console.log('CodDept> '+this.codigoDaneDepartamento);
      /*cargamos polígono del departamento*/
        this.autenticarService.cargarPoligonoDepartamento(this.codigoDaneDepartamento)
        .subscribe(res => {
                      /*Inicio evento Google Maps dibujar polígono departamento*/
                        //obtenemos el array de coordenadas del polygono
                        this.limpiarCoordenadas(res['rows']);
                        //eliminamos los polygons que esten dibujados
                        this.clearPolygonos();
                        //dibujamos el polygon del departamento seleccionado
                        this.createPolygon(this.pathPolygon);
                        //centramos el mapa con la ubicacion del polygon y ajustamos el zoom
                        this.centrarMapa(this.pathPolygon[0],5);
                      /*Fin evento Google Maps dibujar polígono departamento*/

              /**cargamos el select de municipios del departamento seleccionado**/
              this.autenticarService.cargarListaMunicipios(this.codigoDaneDepartamento).subscribe(res => {
                      this.listaMunicipiosDepto=res['rows'];
               },
               error => {
                 console.log(error);
               });
              /**fin cargamos el select de municipios del departamento seleccionado**/
      },
      error => {
                 console.log(error);
      });
      /**fin cargamos el select de municipios del departamento seleccionado**/
      break;
      case 'Municipios':
      this.codigoDaneMunicipio=event.target.value;
      //console.log('CodMncp> '+this.codigoDaneMunicipio);
         /*cargamos polígono del municipio*/
        this.autenticarService.cargarPoligonoMunicipio(this.codigoDaneMunicipio)
        .subscribe(res => {
            //console.log(res);
            /*Inicio evento Google Maps dibujar polígono departamento*/
                        //var dep = this.listaDepartamentos.find(o=>o.cod_dpto==this.departamento);
                        //obtenemos el array de coordenadas del polygono
                        this.limpiarCoordenadas(res['rows']);
                        //eliminamos los polygons que esten dibujados
                        this.clearPolygonos();
                        //dibujamos el polygon del departamento seleccionado
                        this.createPolygon(this.pathPolygon);
                        //centramos el mapa con la ubicacion del polygon y ajustamos el zoom
                        this.centrarMapa(this.pathPolygon[0],7);
                      /*Fin evento Google Maps dibujar polígono departamento*/

              /**cargamos el select de veredas del municipio seleccionado**/
              this.autenticarService.cargarListaVeredas(this.codigoDaneMunicipio).subscribe(res => {
              this.listaVeredasMncpio=res['rows'];
              //console.log(res['rows']);
               },
               error => {
                 console.log(error);
               });
              /**fin cargamos el select de veredas del municipio seleccionado*/
        },
        error => {
                 console.log(error);
        });

      break;
      case 'Veredas':
      this.codigoDaneVereda=event.target.value;
      //console.log('CodVrd> '+this.codigoDaneVereda);
         /*cargamos polígono de la vereda*/
        this.autenticarService.cargarPoligonoVereda(this.codigoDaneVereda)
        .subscribe(res => {
            //console.log(res);
            /*Inicio evento Google Maps dibujar polígono departamento*/
                        //var dep = this.listaDepartamentos.find(o=>o.cod_dpto==this.departamento);
                        //obtenemos el array de coordenadas del polygono
                        this.limpiarCoordenadas(res['rows']);
                        //eliminamos los polygons que esten dibujados
                        this.clearPolygonos();
                        //dibujamos el polygon del departamento seleccionado
                        this.createPolygon(this.pathPolygon);
                        //centramos el mapa con la ubicacion del polygon y ajustamos el zoom
                        this.centrarMapa(this.pathPolygon[0],10);
                      /*Fin evento Google Maps dibujar polígono departamento*/
        },
        error => {
                 console.log(error);
        });

      break;
      default:
      break;
    }
  }
  onChangeOptions(event:any,Tipo,Identificador:any){
    switch (Tipo) {
      case 'Profile':
        this.divTipoPerfil=event.target.value;
       break;
      case 'Productor':
        this.divTipoProductor=event.target.value;
       break;
      case 'ValidarDatosBasicosProductor':
       //validamos form datos básicos
       //if(this.nombres=='' || this.nombres==null){ alert('no ha ingresado el nombre');}
        //console.log(this.nombres);
       //fin validamos datos basicos
        this.divProduce = 1;
       //cargamos el visor de google Maps
        this.initMap();
       break;
      case 'IrForm_1':
        this.divProduce = 0;
       break;
      case 'ListarProdOfrece':
        this.divCultivosProductor = 0;
       break;
      case 'FormProducto':
        /*Form regitro-producto-productos-que-ofrece*/

        /*cargamos select listado de productos*/
        this.autenticarService.cargarListaProductos()
        .subscribe(res => {
                      /*console.log(res['results']);*/
                      this.listaProductos=res['results'];
        },
        error => {
                   console.log(error);
        });
        /*cargamos select departamentos con sus polígonos*/
        this.autenticarService.cargarListaDepartamentos()
        .subscribe(res => {
                        /*activamos el div con el form para adicionar producto*/
                        this.divCultivosProductor = 1;
                        this.listaDepartamentos=res['rows'];
        },
        error => {
                   console.log(error);
        });

       break;
      case 'AdicionarProducto':
        var prod = this.listaProductos.find(o=>o.id_producto==this.producto);
        var dep = this.listaDepartamentos.find(o=>o.cod_dpto==this.departamento);
        var mncp = this.listaMunicipiosDepto.find(o=>o.id==this.municipio);
        var vrd = this.listaVeredasMncpio.find(o=>o.cod_dane==this.vereda);
        this.agricultorProductos.unshift( {id_producto:this.producto, nombre_producto:prod['nombre_producto'], iddepartamento:this.departamento, departamento:dep['nom_dpto'], idmunicipio:this.municipio, municipio:mncp['municipio'],  codigo_dane:this.vereda, vereda:vrd['nom_vereda'], id_productor:0, latd:4.6560663, lngd:-74.0595918});
        this.divCultivosProductor = 0;
        //console.log(this.agricultorProductos);
        //autos.push([ "Precio": precioDescuento ]);
      break;
      case 'EliminarProductoOfrece':
            for(let i = 0; i < this.agricultorProductos.length; i++){
                  if (Identificador == this.agricultorProductos[i]){
                    this.agricultorProductos.splice(i,1);
                  }
            }
      break;
      default:
      break;
    }
  }
   realizarRegistro(){

   if(this.agricultorProductos.length>0){  /*debe haber ingresado al menos un producto registrado para ofrecer*/
    let dataEmpresa =
    {
      "nombre_empresa_o_entidad": this.nombres,
      "direccion" : this.direccion,
      "telefono" : this.telefono,
      "nit" : this.identificacion,
      "tipo_de_productor" : this.divTipoProductor,
      "groups" :1
    }
    //consumimos el servicio que nos va a crear como empresa y nos retorna el idmepresa para crear el usuario
    this.autenticarService.registrarUsuarioEmpresa(dataEmpresa).subscribe(res => {
      this.idEmpresa = res['id'];
      console.log('idempresa retorna> '+this.idEmpresa);
          /*Inicio segundo consumo*/
          let data2 =
          {
            "first_name": this.nombres,
            "last_name": this.apellidos,
            "cedula": this.identificacion,
            "direccion" : this.direccion,
            "username": this.username,
            "password1": this.password,
            "password2": this.passwordConfirm,
            "email": this.email,
            "telefono": this.telefono,
            "id_empresa": this.idEmpresa
          }
          console.log(data2);
         //recibimos el id empresa y consumimos el servicio register que nos creara el usuario en la BD
         this.autenticarService.registrarUsuarioProductor(data2).subscribe(res => {
         console.log(res);
         console.log('IdProductor: '+ res['id']);

             //inicio consumo 3
             //actualizamos el campo id_productor con el id que recibimos
             this.agricultorProductos.map(function(dato){
                 dato.id_productor = res['id'];
             });
             let data3 = this.agricultorProductos;

              //recibimos el id del usuario e ingresamos el array de los productos que ofrece el usuario
              this.autenticarService.registrarProductosUsuario(data3).subscribe(res => {
              console.log(res);
              this.router.navigate(['/login']);
              },
              error => {
                        console.log(error);
              });
             //fin consumo 3

         },
         error => {
           console.log(error);
         });
         /*fin segundo consumo*/

    },
    error => {
       console.log(error);
    });
   } else {
     console.log('No ofrece ningun producto');
   }
  }

///****************************************---Google Maps---**************************************////
        /***funciones de dibujo google maps**/
        //limpiar coordenadas para graficar polygon
        limpiarCoordenadas(arrayBd){
         this.pathPolygon = [];
         var mun = arrayBd;
                        mun=mun[0];
                        var poligono =JSON.parse(mun['st_asgeojson']);
                        var path=poligono['coordinates'];
                        for (let a in path){
                          for(let b in path[a]){
                            for(let c in path[a][b]){
                               this.pathPolygon.push({lat:path[a][b][c][1], lng:path[a][b][c][0]});
                            }
                          }
                        }
        }
  miUbiucacion(){
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position){
       var miUbicacion = {lat: position.coords.latitude, lng: position.coords.longitude};
       //var miUbicacion = {lat: 4.6713254, lng: -74.05937569999999};
       //{lat: 4.6713254, lng: -74.05937569999999}
       alert('Ubicacion  lat:'+position.coords.latitude+' lng:'+position.coords.longitude);
       console.log(miUbicacion);
       this.addMarker(miUbicacion);
    });
  }
  }
        // crear markers con opcion de arrastrar y de centrado de mapa automàtico
        addMarker(location) {
        this.marker = new google.maps.Marker({
          position: location,
          map: this.map
        });
        //permitimos que el marker se pueda arrastrar
        this.marker.setDraggable(true);
        //eliminamos los puntos creados
        this.clearMarkers();
        //adicionamos el nuevo marker
        this.markers.push(this.marker);
        //al dar clic y crear un marker el mapa se centra
        this.map.panTo(this.marker.getPosition());
        console.log(this.marker.getPosition());
      }
      // Remover markers
       clearMarkers() {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(null);
        }
      }
       //Crear polygono
      createPolygon(path){
        this.polygon = new google.maps.Polygon({
                paths: path,
                strokeColor: '#000000',
                strokeOpacity: 0.9,
                strokeWeight: 1,
                fillColor: '#1A1A50',
                fillOpacity: 0.7,
                info:''
              });
      this.polygon.setMap(this.map);
      }
      //Remover polygonos
      clearPolygonos() {
        if(this.drawingpolygono){ this.drawingpolygono.setMap(null); } //dibujados por el usuario
        if(this.polygon){ this.polygon.setMap(null); }  //creados por el onChange select
        if(this.map.getZoom()>4){ this.map.setZoom(4);} //retornamos el zoom del mapa al valor por default
      }
      //ajustar zoom y centrar mapa
      centrarMapa(paramLtLng,paramZoom){
        this.map.setZoom(paramZoom);
        this.map.setCenter(paramLtLng);
      }
     /***fin funciones de dibujo google maps**/

  initMap() {
    let point = this;
    setTimeout(function(){

       var mapColombia = {lat: 4.708507, lng: -74.072802};
       point.map = new google.maps.Map(document.getElementById('map'), {
          center: mapColombia,
          zoom: 4,
          mapTypeControl: false,
          streetViewControl: false
        });

       //creo marker al dar clic cobre el mapa.
        point.map.addListener('click', function(event) {
        point.addMarker(event.latLng);
        });

        //var miUbicacion = {lat: 4.6713254, lng: -74.05937569999999};
        //point.addMarker(miUbicacion);



    /**controles de herramientas de dibujo**/
    point.drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: null,
          drawingControl: true,
          drawingControlOptions : {
                                   position: google.maps.ControlPosition.TOP_RIGHT,
                                   drawingModes: [
                                                 google.maps.drawing.OverlayType.CIRCLE,
                                                 google.maps.drawing.OverlayType.POLYGON,
                                                 google.maps.drawing.OverlayType.RECTANGLE
                                                 ]
                                  }
       });
       point.drawingManager.setMap(point.map);
  /****************/

  google.maps.event.addListener(point.drawingManager, 'polygoncomplete', function(polygon) {
      console.log(polygon.getPath());
      point.clearPolygonos();
      point.drawingManager.setMap(point.map);
      point.drawingpolygono=polygon;
    });

    google.maps.event.addListener(point.drawingManager, 'circlecomplete', function(circle) {
      var circulo = {
        'type': 1,
        'radio': circle.getRadius(),
        'lng': circle.getCenter().lng(),
        'lat': circle.getCenter().lat()
      };
    });

  /*****************/

    }, 50);  //fin timeOut

  }//fin initmap


}


