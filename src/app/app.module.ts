import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

import { EmailService } from './services/email.service';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
