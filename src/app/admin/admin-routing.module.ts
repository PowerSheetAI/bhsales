import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManagaCTAComponent } from './manage-cta/manage-cta.component';
import { ManagaEventsComponent } from './manage-events/manage-events.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageAnnouncementsComponent } from './manage-announcements/manage-announcement.component';

const adminRoutes: Routes = [
	{ 
		path: 'admin', 
		component: AdminComponent,
		children: [
			{
				path: 'cta',
				component: ManagaCTAComponent
			},
			{
				path: 'events',
				component: ManagaEventsComponent
			},
			{
				path: 'products',
				component: ManageProductsComponent
			},
			{
				path: 'announcements',
				component: ManageAnnouncementsComponent
			}
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
