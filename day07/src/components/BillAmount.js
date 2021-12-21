import { useContext, useEffect, useRef } from 'react'
import priceFloat from '../utility/pricePriceFloat'
import { billActions, BillContext } from '../context/BillContext'
const BillAmount = () => {
  const billRef = useRef()
  const { dispatch } = useContext(BillContext)

  useEffect(() => {
    document.addEventListener('calculate', () => {
      const action = { type: billActions.UPDATE_TOTAL, payload: billRef.current.value }
      dispatch(action)
    })
  }, [billRef, dispatch])

  return (
    <div className="bill-amount">
      <div className="field">
        <input type="number"
          id="bill-amount"
          name="bill-amount"
          defaultValue={priceFloat(0)}
          step="0.01"
          ref={billRef}
          pattern="^\d*(\.\d{0,2})?$" 
          onBlur={(e) => e.target.value = priceFloat(e.target.value)}/>
      </div>
      <div className="label">Bill Amount</div>
    </div>
  )
}

export default BillAmount