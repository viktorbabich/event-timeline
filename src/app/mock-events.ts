import {Transaction} from './transaction'
import {News} from './news'

export const EVENTS: (Transaction|News)[] = [
	{
		total: "213421", 
		currency: "юани", 
		from: "Вова",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		direction: "приход",
		date: "15.02.17",
		type: "transaction"
	},
	{
		title: "Открытие нового офиса",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		date: "213123",
		type: "news"
	},
	{
		total: "12312",
		currency: "доллары", 
		from: "Катя",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "приход",
		date: "26.05.18",
		type: "transaction"
	},
	{
		total: "1412", 
		currency: "форинты", 
		from: "Юра",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: "02.12.18",
		type: "transaction"
	}
]