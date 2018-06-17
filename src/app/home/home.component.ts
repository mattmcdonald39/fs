import { Component, OnInit, Injectable } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nativeWindow: any;
  constructor() {
   }

  ngOnInit() {
  }


  buy() {
    let amazon = window.open('https://www.amazon.com/The-Face-Shade-FS-01-Blue/dp/B00K4QJY7U/', "_blank");
  }
}
