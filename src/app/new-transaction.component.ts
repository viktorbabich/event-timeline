import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';

@Component({
  selector: 'new-transaction',
  template: `
		<form #transactionForm="ngForm" (ngSubmit)="onSubmit(transactionForm)">
			<div class="form__group">
				<label for="">Сумма транзакции</label>
				<input name="total" />
			</div>
			<div class="form__group">
				<label for="">Валюта</label>
				<input type="text"/>
			</div>
			<div class="form__group">
				<label for="">Контрагент</label>
				<input type="text" />
			</div>
			<div class="form__group">
				<label for="">Описание</label>
				<input type="text" />
			</div>
			<div class="form__group">
				<select>
					<option value="">Приход</option>
					<option value="">Расход</option>
				</select>
			</div>
			<button>Провести транзакцию</button>
		</form>	
  `,
  styleUrls: []
})
export class NewTransactionComponent {
	
	newTransaction: Transaction;

	constructor(private _transactionService: TransactionService) {}

	onSubmit(transactionForm: NgForm) {
		const n = { 
			total: "string",
			currency: "string", 
			from: "string", 
			description: "string", 
			direction: "string",
			date: new Date(), 
			type: "string" 
		}
		this._transactionService.insertTransaction(n);
	}

}
