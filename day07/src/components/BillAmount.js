import { useContext, useEffect, useRef } from 'react'
import priceString from '../utility/priceString'
import { billActions, BillContext } from '../context/BillContext'
const BillAmount = () => {
  const billRef = useRef()
  const { bill, dispatch } = useContext(BillContext)

  useEffect(() => {
    document.addEventListener('calculate', () => {
      const action = { type: billActions.UPDATE_TOTAL, payload: billRef.current.value }
      dispatch(action)
      console.log(bill)
    })
  }, [dispatch])

  return (
    <div className="bill-amount">
      <div className="field">
        <input type="number"
          id="bill-amount"
          name="bill-amount"
          defaultValue={priceString(0)}
          step="0.01"
          ref={billRef}
          pattern="^\d*(\.\d{0,2})?$" 
          onBlur={(e) => e.target.value = parseFloat(e.target.value).toFixed(2)}/>
      </div>
      <div className="label">Bill Amount</div>
    </div>
  )
}

export default BillAmount