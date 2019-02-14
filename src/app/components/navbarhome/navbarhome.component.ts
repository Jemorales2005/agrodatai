import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarhome',
  templateUrl: './navbarhome.component.html',
  styleUrls: ['./navbarhome.component.css']
})
export class NavbarhomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
