import {Transaction} from './transaction'

export const TRANSACTIONS: Transaction[] = [
	{
		total: "213421", 
		currency: "юани", 
		from: "Вова",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		direction: "приход",
		date: "15.02.17",
		type: "транзакция"
	},
	{
		total: "123213", 
		currency: "рубли", 
		from: "Жека",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: "23.12.18",
		type: "транзакция"
	},
	{
		total: "12312",
		currency: "доллары", 
		from: "Катя",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "приход",
		date: "26.05.18",
		type: "транзакция"
	},
	{
		total: "1412", 
		currency: "форинты", 
		from: "Юра",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: "02.12.18",
		type: "транзакция"
	}
]