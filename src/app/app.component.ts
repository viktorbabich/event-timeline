import { Component } from '@angular/core';
import { EventListComponent } from './event-list.component';
import { NewTransactionComponent } from './new-transaction.component';
import { HeaderComponent } from './header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  	<header-component></header-component>
		<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
