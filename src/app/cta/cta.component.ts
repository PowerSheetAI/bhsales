import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { CTA } from '../models/cta';
import { CTASevrice } from '../services/cta.service'

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css'],
  providers: [CTASevrice, AngularFireDatabase]
})
export class CtaComponent implements OnInit {

  cta: FirebaseObjectObservable<any>;

  constructor(public service:CTASevrice){
    
  }

  ngOnInit(){
    this.cta = this.service.cta;
  }

  update(newHeaderText, newSubHeaderText){
    this.service.update(newHeaderText, newSubHeaderText);
  }

}
