import BillAmount from './components/BillAmount'
import NumberOfPeople from './components/NumberOfPeople'
import TipAmount from './components/TipAmount'
import TipPercentages from './components/TipPercentages'
import TotalPerPerson from './components/TotalPerPerson';
import './App.css';

function App() {
	const calculateEvent = new Event('calculate', () => { console.log('test')})
	const calculate = () => {
		document.dispatchEvent(calculateEvent)
	}

  return (
    <div className="wrapper">
			<TipAmount />
			<TotalPerPerson/>

			<div className="input-fields">
				<BillAmount/>
				<NumberOfPeople/>
			</div>

			<TipPercentages/>
			<div className="button-wrapper">
				<button id="calculate" onClick={() => calculate()}>Calculate</button>
			</div>
    </div>
  );
}

export default App;
