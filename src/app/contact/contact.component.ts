import { Component, OnInit, Injectable } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  comment: string;
  constructor(public emailSvc: EmailService) {
   }

  ngOnInit() {
  }
  submit(e) {
    debugger;
    e.preventDefault();
    this.emailSvc.sendEmail();
  };

  onKey(event, name) {
    switch(name) {
        case 'name':
            this.name = event.target.value
            break;
        case 'email':
            this.email = event.target.value
            break;
        case 'comment':
            this.comment = event.target.value
            break;
        default:
            break;
    }
  }
}
