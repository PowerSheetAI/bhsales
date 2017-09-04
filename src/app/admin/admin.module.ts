import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { AdminComponent } from './admin.component';
import { ManagaCTAComponent } from './manage-cta/manage-cta.component';
import { ManagaEventsComponent } from './manage-events/manage-events.component';
import { ManageProductsNewComponent } from './manage-products/manage-products-new.component';
import { ManageAnnouncementsComponent } from './manage-announcements/manage-announcement.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	declarations: [
		AdminComponent,
		ManagaCTAComponent,
		ManagaEventsComponent,
		ManageProductsNewComponent,
		ManageAnnouncementsComponent
	]
})
export class AdminModule{}