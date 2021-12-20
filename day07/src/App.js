import BillAmount from './components/BillAmount'
import NumberOfPeople from './components/NumberOfPeople'
import TipAmount from './components/TipAmount'
import TipPercentages from './components/TipPercentages'
import TotalPerPerson from './components/TotalPerPerson';
import './App.css';

function App() {
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
				<button id="calculate">Calculate</button>
			</div>
    </div>
  );
}

export default App;
