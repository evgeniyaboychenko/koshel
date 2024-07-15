import { makeAutoObservable} from "mobx";
import { RATE } from "../const";

import { TypeCurrency, Currency } from "../types";

class ConverterStore {
	firstСurrency : Currency;
	secondСurrency:Currency;

	constructor() {
		this.firstСurrency = {
			type: TypeCurrency.USD,
			value: "",
			isValid: true,
		};
		this.secondСurrency = {
			type: TypeCurrency.EUR,
			value: "",
			isValid: true,
		};

		makeAutoObservable(this);
	}

	resetInput = (currency: Currency) => {
		currency.isValid=true;
		currency.value='0'
	};

	validate = (currency: Currency, value: string) => {
		switch (currency.type) {
			case TypeCurrency.USD: {
				this.resetInput(this.secondСurrency)
				break;
			}
			case TypeCurrency.EUR:
			{
				this.resetInput(this.firstСurrency)
				break;
			}
			default: break; 
		}
		const pattern = /^\d+[.]?\d{0,2}$/;
		currency.isValid=pattern.test(value);
		currency.value = value;
	};

	calculate = (currency:Currency, typeCurrency: string) => {
		if(currency.isValid) {
			switch (typeCurrency) {
				case TypeCurrency.USD: {
					this.secondСurrency.isValid = true;
					this.secondСurrency.value = (Number(currency.value) / RATE).toFixed(2);
					
					break;
				}
				case TypeCurrency.EUR:
				{
					this.firstСurrency.isValid = true;
					this.firstСurrency.value = (Number(currency.value) * RATE).toFixed(2);
					
					break;
				}
				default: break; 
			}
		}
	}

	onInputChange = (currency: Currency,typeCurrency: string ,value: string ) => {
		this.validate(currency, value);
		this.calculate(currency, typeCurrency);
	};

	
}

export default ConverterStore;