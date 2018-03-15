import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'news-modal',
  template: `
  	<div (click)="closeModal()">X</div>
	  <div class="news">
	  	<div>{{ news.title }}</div>
	  	<div>{{ news.description }}</div>
	  	<div>{{ news.date }}</div>
	  	<div>{{ news.type }}</div>
	  </div>
	  <a href="#">Ознакомился</a>
  `,
  inputs: ['news']
})
export class NewsModalComponent {
	@Output() modalClosed = new EventEmitter();

	closeModal() {
		this.modalClosed.emit();
	}
}
