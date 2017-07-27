import { Component, OnInit, Injectable, ElementRef } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { nodemailer } from 'nodemailer';

@Component({
  selector: 'contact-page',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  comment: string;
  constructor(public elmRef: ElementRef) {
   }

  ngOnInit() {
  }
  submit(e) {
    debugger;
    e.preventDefault();
    this.sendEmail();
  };

  // make this a service
  sendEmail() {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ronmcdonklown@yahoo.com',
        pass: '3@theWmgarvin39!'
      }
    });

    var mailOptions = {
      from: 'contact-page@thefaceshade.com',
      to: 'mmcdonald39@gmail.com',
      subject: 'Contact us email',
      text: 'test'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }


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
