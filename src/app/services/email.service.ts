import { Injectable } from '@angular/core';

// const nodemailer = require('nodemailer');

@Injectable()
export class EmailService {
  // make this a service
  sendEmail() {

    //  This stuff goes in server.js and we call http.post to send email
    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'ronmcdonklown@yahoo.com',
    //     pass: '3@theWmgarvin39!'
    //   }
    // });

    // var mailOptions = {
    //   from: 'contact-page@thefaceshade.com',
    //   to: 'mmcdonald39@gmail.com',
    //   subject: 'Contact us email',
    //   text: 'test'
    // };

    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });
  }
}