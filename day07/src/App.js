import { useState } from 'react'
import priceString from './utility/priceString'
import TipAmount from './components/TipAmount';
import './App.css';

function App() {
	const [bill, setBill] = useState(() => 0)
	const [tip, setTip] = useState(() => 0)
	const [perPerson, setPerPerson] = useState(() => 0)
	const [numPeople, setNumPeople] = useState(() => 3)
	const tipData = [
		{
			percent: 0.05,
			id: 'five-percent',
		},
		{
			percent: 0.10,
			id: 'ten-percent',
		},
		{
			percent: 0.15,
			id: 'fifteen-percent',
		},
		{
			percent: 0.20,
			id: 'twenty-percent',
		}
	]

	const handleTip = (e) => {
		console.log(e.target.value)
	}

	const handleBillAmount = (e) => {

	}
	
	const handleNumPeople = (e) => {

	}

  return (
    <div className="wrapper">
			<TipAmount />
			<div className="total-per-person">
				<div className="label">Total Per Person</div>
				<div className="dollars"><sup>$</sup><span id="total-per-person">{priceString(perPerson)}</span></div>
			</div>

			<div className="input-fields">
				<div className="bill-amount">
					<div className="field">
						<input type="text" id="bill-amount" name="bill-amount" value={priceString(bill)} onChange={(e) => handleBillAmount(e)} />
					</div>
					<div className="label">Bill Amount</div>
				</div>
				<div className="number-of-people">
					<div className="field">
						<input type="text" id="number-of-people" name="number-of-people" value={numPeople} onChange={(e) => setNumPeople(prev => prev = e.target.value)}/>
					</div>
						<div className="label">Number of People</div>
				</div>
			</div>

			<div className="tip-percentages">
				{tipData.map((tip, key) => {
					return (
						<div key={key}>
						<input type="radio" name="tip" value={tip.percent} id={tip.id} onChange={(e) => handleTip(e)} />
						<label htmlFor={tip.id}>
							{tip.percent * 100}%
						</label>
					</div>
					)
				})}
				
			</div>
			<div className="button-wrapper">
				<button id="calculate">Calculate</button>
			</div>
    </div>
  );
}

export default App;
