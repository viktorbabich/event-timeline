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
  	<div>
  		<div>
				<div (click)="sortArr('date')">Дата</div>
				<div (click)="sortArr('type')">Тип</div>
  		</div>
			<div *ngFor="let item of events">
				<transaction *ngIf="item.type === 'transaction'" [transaction]="item"></transaction>
				<news *ngIf="item.type === 'news'" [news]="item"></news>
			</div>
  	</div>
  `,
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})
export class EventListComponent {
	// public transactions: Transaction[];
	public events: (Transaction|News)[];
	public currentSortValue: string;
  public reverseSort: boolean = false;

	constructor(private _eventService: EventService ) {}

	dynamicSort(property: string) {
    var sortOrder = 1;
    if(this.reverseSort === true) {
      sortOrder = -1;
    }
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
	}

  sortArr(property: string) {
  	if(property === this.currentSortValue) {
      this.reverseSort = !this.reverseSort;
    } else {
      this.reverseSort = false;
    }
  	this.currentSortValue = property;
  	this.events.sort(this.dynamicSort(property));
  }


	getEvents() {
		this._eventService.getEvents().then((events: (Transaction|News)[]) => this.events = events)
	}

	ngOnInit():any {
		this.getEvents();
	}

}
