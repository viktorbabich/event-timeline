export interface Transaction {
	total: string,
	currency: string, 
	from: string, 
	description: string, 
	direction: string,
	date: Date, 
	type: string,
	id: string
}