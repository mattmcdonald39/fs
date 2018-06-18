import { Component, Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { M } from 'materialize-css';
import { MatToolbarModule } from '@angular/material';
import { AmazonConstants } from '../../constants/amazon.constants';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nativeWindow: any;

  constructor(private router: Router) {
    this.router.events
      .filter((event: Event) => event instanceof NavigationEnd)
      .first()
      .subscribe((event: NavigationEnd) => {
        (<any>window).renewParallax();
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      });
   }

  goToAmazon(source) {
    this.trackGA(source);
    window.open(AmazonConstants.amazonFaceShadeBlueLink, AmazonConstants.newTab);
  }

  trackGA(source) {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Button',
      eventAction: 'click',
      eventLabel: source
    });
  }
}
