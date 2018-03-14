import {Transaction} from './transaction'

export const TRANSACTIONS: Transaction[] = [
	{
		total: "213421", 
		currency: "юани", 
		from: "Вова",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		direction: "приход",
		date: new Date(),
		type: "транзакция"
	},
	{
		total: "123213", 
		currency: "рубли", 
		from: "Жека",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: new Date(),
		type: "транзакция"
	},
	{
		total: "12312",
		currency: "доллары", 
		from: "Катя",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "приход",
		date: new Date(),
		type: "транзакция"
	},
	{
		total: "1412", 
		currency: "форинты", 
		from: "Юра",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: new Date(),
		type: "транзакция"
	}
]