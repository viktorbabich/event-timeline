import {Component} from "@angular/core"

@Component({
	selector: "header-component",
	template: `
		<header>
			<nav>
			  <a routerLink="/add-transaction" routerLinkActive="active">Провести транзакцию</a>
			</nav>
		</header>
	`

})

export class HeaderComponent {
	
}