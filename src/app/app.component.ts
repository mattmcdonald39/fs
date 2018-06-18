import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AmazonConstants } from '../constants/amazon.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FaceShade';

  constructor() {

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
