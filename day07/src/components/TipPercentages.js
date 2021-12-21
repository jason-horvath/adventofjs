import { useContext, useEffect, useState } from 'react'
import { billActions, BillContext } from '../context/BillContext'

const TipPercentages = () => {
	const [tipPercent, setTipPercent] = useState(0.00)
  const { dispatch } = useContext(BillContext)
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
  
	useEffect(() => {
    document.addEventListener('calculate', () => {
      dispatch({type: billActions.UPDATE_TIP_PERCENT, payload: tipPercent})
    })
  }, [dispatch, tipPercent])

	const handleTip = (e) => {
		setTipPercent(e.target.value)
	}

  return (
    <div className="tip-percentages">
      {tipData.map((tip, key) => {
        return (
          <div key={key}>
          <input
						type="radio"
						name="tip"
						value={tip.percent}
						id={tip.id}
						onChange={(e) => handleTip(e)}
					/>
          <label htmlFor={tip.id}>
            {tip.percent * 100}%
          </label>
        </div>
        )
      })}
    </div>
  )
}

export default TipPercentages