import { Component, OnInit } from '@angular/core';
import { TransactionComponent } from './transaction.component';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction';

@Component({
  selector: 'event-list',
  template: `
		<transaction *ngFor="let transaction of transactions" [transaction]="transaction"></transaction>
  `,
  styleUrls: ['./app.component.css'],
  providers: [TransactionService]
})
export class EventListComponent {
	public transactions: Transaction[];

	constructor(private _transactionService: TransactionService ) {}

	getTransactions() {
		this._transactionService.getTransactions().then((transactions: Transaction[]) => this.transactions = transactions)
	}

	ngOnInit():any {
		this.getTransactions();
	}

}
