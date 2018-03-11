import { Component } from '@angular/core';

@Component({
  selector: 'transaction',
  template: `
	  <div class="transaction">
	  	<div>{{ transaction.total }}</div>
	  	<div>{{ transaction.currency }}</div>
	  	<div>{{ transaction.from }}</div>
	  	<div>{{ transaction.description }}</div>
	  	<div>{{ transaction.direction }}</div>
	  	<div>{{ transaction.date }}</div>
	  	<div>{{ transaction.type }}</div>
	  </div>
  `,
  inputs: ['transaction'],
  styleUrls: ['./app.component.css']
})
export class TransactionComponent {

}
