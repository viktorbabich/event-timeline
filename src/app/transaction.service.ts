import {Injectable} from "@angular/core";
import {TRANSACTIONS} from "./mock-transaction";
import {Transaction} from "./transaction";

@Injectable()

export class TransactionService {
	getTransactions() {
		return Promise.resolve(TRANSACTIONS);
	}
	insertTransaction(transaction: Transaction) {
		Promise.resolve(TRANSACTIONS).then((transactions: Transaction[]) => transactions.push(transaction))
	}
}