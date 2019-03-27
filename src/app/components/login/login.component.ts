import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticarService } from '../../services/autenticar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private autenticarService: AutenticarService) { }

  username : string = null;
  password : string = null;

  login(){
    /*console.log(this.username);
    console.log(this.password);*/

    let data =
    {
      "username": this.username,
      "password": this.password
    }
    this.autenticarService.ValidarUsuario(data).subscribe(res => {
      localStorage.setItem('token', res['token']);
      localStorage.setItem('username', this.username);
      this.router.navigate(['/dashboard']);

              /********cargamos el perfil de usuario****/
              /*this.autenticarService.CargarPerfilUsuario(res['token']).subscribe(res => {

              localStorage.setItem('datosUser', JSON.stringify(res));
              //console.log('objetoObtenido: ', JSON.parse(localStorage.getItem('datosUser')));
              this.router.navigate(['/board']);
              },
              error => {
               console.log(error);
              });*/
              /*******fin cargamos el perfil de usuario*****/
     },
     error => {
       console.log(error);
     });
  }

  ngOnInit() {
  }

  /*
onLogin(form:NgForm){
    console.log(form);
    if(form.valid){
  */

}
