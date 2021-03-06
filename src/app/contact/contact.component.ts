import { Component, OnInit, Injectable } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { FormControl, FormGroup} from '@angular/forms';
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
  reason: string = "question";
  sending: boolean = false;
  constructor(public emailSvc: EmailService) {

   }

  ngOnInit() {
  }

  onChange(value){
    this.reason = value;
  }

  submit(e) {
    this.sending = true;
    e.preventDefault();
    let content = {
      name: this.name,
      email: this.email,
      comment: this.comment,
      reason: this.reason
    }
    let response = this.emailSvc.sendEmail(content);
    console.log(response);
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
        case 'reason':
            this.reason = event.target.value
        default:
            break;
    }
  }
}
