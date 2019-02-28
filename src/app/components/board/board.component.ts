import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lat: number = 4.6560663;
  lng: number = -74.0595918;

  constructor() { }

  ngOnInit() {
       /* $(window).click(function () {
        alert('ok');
        });*/
  }




}

