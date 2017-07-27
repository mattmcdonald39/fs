import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class EmailService {
    public headers: Headers;
    constructor(public http: Http){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');   
    }
  // make this a service
  sendEmail(content) {
    this.http.post('/api/sendmail', null, {headers: this.headers}).map( res => res.json()).subscribe();
  }
}