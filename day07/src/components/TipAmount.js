import { useContext, useEffect, useState } from 'react'
import { BillContext } from '../context/BillContext'
import priceString from '../utility/priceString'
const TipAmount = () => {
  const [tipAmount, setTipAmount] = useState(0.00)
  const { bill } = useContext(BillContext)
  const updateTipAmount = () => {
     setTipAmount(bill.total * bill.tipPercent)
  }
  useEffect(() => {
    document.addEventListener('calculate', () => {
      updateTipAmount()
    })
  }, [updateTipAmount])
  return (
    <div className="tip-amount">
      <div className="label">Tip Amount</div>
      <div className="dollars"><sup>$</sup><span id="tip-amount">{priceString(tipAmount)}</span></div>
    </div>
  )
}

export default TipAmount