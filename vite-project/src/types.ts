export enum TypeCurrency {
	USD='USD',
	EUR='EUR'
}

export interface Currency {
	type: TypeCurrency,
	value: string,
	isValid: boolean,
}