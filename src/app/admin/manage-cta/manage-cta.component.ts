import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { CTA } from '../../models/cta';
import { CTAService } from '../../services/cta.service'; 

@Component({
	templateUrl: './manage-cta.component.html',
	styleUrls: ['./manage-cta.component.css'],
	providers: [CTAService, AngularFireDatabase]
})
export class ManagaCTAComponent implements OnInit{

	cta  = {}

	constructor(private service: CTAService){

	}

	ngOnInit(){
		this.cta = this.service.cta;
	}

	update(newHeaderText, newSubHeaderText){
		this.service.update(newHeaderText, newSubHeaderText)
	}

}