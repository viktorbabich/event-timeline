import {Transaction} from './transaction'
import {News} from './news'

export const EVENTS: (Transaction|News)[] = [
	{
		total: "213421", 
		currency: "юани", 
		from: "Вова",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		direction: "приход",
		date: new Date("February 4, 2016 10:13:00"),
		type: "transaction"
	},
	{
		title: "Открытие нового офиса",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		date: new Date("February 4, 2016 10:13:00"),
		type: "news"
	},
	{
		total: "12312",
		currency: "доллары", 
		from: "Катя",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "приход",
		date: new Date("February 4, 2016 10:13:00"),
		type: "transaction"
	},
	{
		total: "1412", 
		currency: "форинты", 
		from: "Юра",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: new Date("February 4, 2016 10:13:00"),
		type: "transaction"
	}
]