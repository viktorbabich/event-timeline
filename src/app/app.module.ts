import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list.component';
import { TransactionComponent } from './transaction.component';
import { NewsComponent } from './news.component';
import { EventService } from './event.service';
import { NewTransactionComponent } from './new-transaction.component';
import { HeaderComponent } from './header.component';
import { TransactionService } from './transaction.service';


const appRoutes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'add-transaction', component: NewTransactionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    TransactionComponent,
    NewsComponent,
    NewTransactionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [EventService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
