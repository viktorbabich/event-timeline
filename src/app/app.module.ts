import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list.component';
import { TransactionComponent } from './transaction.component';
import { TransactionService } from './transaction.service';
import { NewTransactionComponent } from './new-transaction.component';
import { HeaderComponent } from './header.component';


const appRoutes: Routes = [
  { path: '', component: EventListComponent },
  { path: 'add-transaction', component: NewTransactionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    TransactionComponent,
    NewTransactionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
