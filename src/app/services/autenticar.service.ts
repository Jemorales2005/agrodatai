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
      //headers: {'Authorization':this.user.Autorizacion['token_type']+' '+this.user.Autorizacion['access_token']}
    });
  }
}
