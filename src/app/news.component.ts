import { Component } from '@angular/core';

@Component({
  selector: 'news',
  template: `
	  <div class="news">
	  	<div>{{ news.title }}</div>
	  	<div>{{ news.description }}</div>
	  	<div>{{ news.date }}</div>
	  	<div>{{ news.type }}</div>
	  </div>
  `,
  inputs: ['news']
})
export class NewsComponent {

}
