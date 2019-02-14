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
    console.log(this.username);
    console.log(this.password);

    let data =
    {
      "username": this.username,
      "password": this.password
    }
    this.autenticarService.ValidarUsuario(data).subscribe(res => {
      console.log(res);

     },
     error => {
       console.log(error);

     });
  }

  ngOnInit() {
  }

}
