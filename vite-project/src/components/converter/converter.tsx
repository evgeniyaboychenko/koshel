import './converter.scss'
import { observer } from 'mobx-react-lite';
import ConverterStore from '../../stores/converter-store';
import { FieldInput } from '../field-input/feld-input';

const converterStore = new ConverterStore();

export const Converter = observer(() => {
	const {firstСurrency, secondСurrency, onInputChange} = converterStore;
	return (
		<section className='converter'> 
		<h1>Конвертер валют USD/EUR</h1>
		<fieldset className='converter__fieldset'>
			<FieldInput currency = {firstСurrency} onInputChange={onInputChange}></FieldInput>
			<FieldInput currency = {secondСurrency} onInputChange={onInputChange}></FieldInput>
		</fieldset>
		</section>
	);
});