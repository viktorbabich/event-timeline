import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction';
import { TransactionComponent } from './transaction.component';
// import { TransactionService } from './transaction.service';
import { News } from './news';
import { NewsComponent } from './news.component';

import { EventService } from './event.service';



@Component({
  selector: 'event-list',
  template: `
		<div *ngFor="let item of events">
		  <transaction *ngIf="item.type === 'transaction'" [transaction]="item"></transaction>
		  <news *ngIf="item.type === 'news'" [news]="item"></news>
		</div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})
export class EventListComponent {
	// public transactions: Transaction[];
	public events: (Transaction|News)[];

	constructor(private _eventService: EventService ) {}

	getEvents() {
		this._eventService.getEvents().then((events: (Transaction|News)[]) => this.events = events)
	}

	ngOnInit():any {
		this.getEvents();
	}

}
