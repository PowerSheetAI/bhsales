import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { CTA } from '../models/cta';

@Injectable()
export class CTAService{

	public cta: FirebaseObjectObservable<any>;

	//public cta = {}

	constructor(private db: AngularFireDatabase){
		this.cta = db.object('/cta');
	}

	update(newHeaderText: string, newSubHeaderText: string){
		this.cta.update({ headerText: newHeaderText, subHeaderText: newSubHeaderText});
	}

}