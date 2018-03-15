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
		type: "transaction",
		id: "a1"
	},
	{
		title: "прозрачно небо",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		date: new Date("January 8, 2016 10:13:00"),
		type: "news",
		id: "a2"
	},
	{
		title: "Открытие нового офиса",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		date: new Date("March 8, 2016 10:13:00"),
		type: "news",
		id: "a3"
	},
	{
		title: "тиха украинская ночь",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?",
		date: new Date("December 8, 2016 10:13:00"),
		type: "news",
		id: "a4"
	},
	{
		total: "12312",
		currency: "доллары", 
		from: "Катя",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "приход",
		date: new Date("February 2, 2016 10:13:00"),
		type: "transaction",
		id: "a5"
	},
	{
		total: "1412", 
		currency: "форинты", 
		from: "Юра",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, officia?", 
		direction: "расход",
		date: new Date("February 1, 2016 10:13:00"),
		type: "transaction",
		id: "a6"
	}
]