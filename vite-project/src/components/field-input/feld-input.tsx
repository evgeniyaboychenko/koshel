import './field-input.scss'
import { observer } from 'mobx-react-lite';
import { TypeCurrency, Currency} from '../../types';

interface Props {
	currency: Currency,
	onInputChange: (currency: Currency, type: TypeCurrency, value: string) => void;
}

export const FieldInput = observer((props:Props ) => {
	const { currency, onInputChange } = props;
	return (
		<div className='converter__field field-input'>
			<label htmlFor={currency.type}>{currency.type}</label>
			<input  type='text'  placeholder='0' min='0' id ={currency.type} onInput={(evt)=>{
				onInputChange(currency, currency.type, (evt.target as HTMLInputElement).value );
			}} value ={currency.value}/>
			<span className='field-input__error'>{currency.isValid? '': 'Недопустимый формат'}</span>
		</div>
	);
});