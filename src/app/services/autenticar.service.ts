import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutenticarService {

  constructor(public http: HttpClient, private router: Router) {}

  public ValidarUsuario(data){
    return this.http.post(environment.URLBackend+'login/',data,{
    });
  }

  public CargarPerfilUsuario(data){
       let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
           headers = new HttpHeaders().set('Authorization', 'Token ' + data);

    return this.http.get(environment.URLBackend+'ListarUsuarios/',{
      headers: headers
    });
  }

  public CerrarSesion(data){
       let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
           headers = new HttpHeaders().set('Authorization', 'Token ' + data);

    return this.http.post(environment.URLBackend+'rest-auth/logout/',data,{
      headers: headers
    });
  }

  public registrarUsuarioEmpresa(data){
       return this.http.post(environment.URLBackend+'company/',data,{
    });
  }

  public registrarUsuarioProductor(data){
       return this.http.post(environment.URLBackend+'register/',data,{
    });
  }

  public registrarProductosUsuario(data){
       return this.http.post(environment.URLBackend+'producir/',data,{
    });
  }

  public cargarListaProductos(){
       return this.http.get(environment.URLBackend+'productos/',{
    });
  }

  public cargarListaDepartamentos(){
       return this.http.get(environment.URLBackend+'departamentos/',{
    });
  }

  public cargarPoligonoDepartamento(codDepto){
       return this.http.get(environment.URLBackend+'/polidepartamentos/?id='+codDepto,{
    });
  }

  public cargarListaMunicipios(codDepto){
       return this.http.get(environment.URLBackend+'/municipios/?id='+codDepto,{
    });
  }

  public cargarPoligonoMunicipio(codMncp){
       return this.http.get(environment.URLBackend+'/polimunicipios/?id='+codMncp,{
    });
  }

  public cargarListaVeredas(codMncpio){
      return this.http.get(environment.URLBackend+'/veredas/?dptompio='+codMncpio,{
    });
  }

  public cargarPoligonoVereda(codVrd){
       return this.http.get(environment.URLBackend+'/poliveredas/?id='+codVrd,{
    });
  }

  public ActualizarPreciosProducto(data,token){
    let headers = new HttpHeaders().set('Content-Type','application/json');
        headers = new HttpHeaders().set('Authorization', 'Token ' + token);
    return this.http.post('https://services-dot-cebar-servinf-agrodat-ai-dev.appspot.com/precios/',data,{
      headers: headers
    });
  }

  public ActualizarValoresClima(data,token){
    let headers = new HttpHeaders().set('Content-Type','application/json');
        headers = new HttpHeaders().set('Authorization', 'Token ' + token);
    return this.http.post('https://services-dot-cebar-servinf-agrodat-ai-dev.appspot.com/clima/',data,{
      headers: headers
    });
  }
}
