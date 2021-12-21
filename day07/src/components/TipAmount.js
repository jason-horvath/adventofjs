import { useContext } from 'react'
import { BillContext } from '../context/BillContext'
import priceFloat from '../utility/pricePriceFloat'
const TipAmount = () => {
  const { getTipAmount } = useContext(BillContext)

  return (
    <div className="tip-amount">
      <div className="label">Tip Amount</div>
      <div className="dollars"><sup>$</sup><span id="tip-amount">{priceFloat(getTipAmount())}</span></div>
    </div>
  )
}

export default TipAmount