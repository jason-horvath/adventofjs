import { useContext } from 'react'
import { BillContext } from '../context/BillContext'
import priceString from '../utility/priceString'
const TipAmount = () => {
  const { billState } = useContext(BillContext)
  const getTipAmount = () => {
    return billState.total * billState.tipPercent
  }
  return (
    <div className="tip-amount">
      <div className="label">Tip Amount</div>
      <div className="dollars"><sup>$</sup><span id="tip-amount">{priceString(getTipAmount())}</span></div>
    </div>
  )
}

export default TipAmount