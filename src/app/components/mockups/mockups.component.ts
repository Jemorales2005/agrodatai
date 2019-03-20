import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mockups',
  templateUrl: './mockups.component.html',
  styleUrls: ['./mockups.component.css']
})
export class MockupsComponent implements OnInit {
   usuarioSesion : any = localStorage.getItem('username');

  constructor() { }

  ngOnInit() {
  }

}
