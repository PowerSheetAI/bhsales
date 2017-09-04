import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
