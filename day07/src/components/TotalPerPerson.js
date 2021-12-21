import { useContext } from 'react'
import { BillContext } from '../context/BillContext'
import priceFloat from '../utility/pricePriceFloat'

const TotalPerPerson = () => {
  const { getTotalPerPerson } = useContext(BillContext)

  return (
    <div className="total-per-person">
      <div className="label">Total Per Person</div>
      <div className="dollars"><sup>$</sup><span id="total-per-person">{priceFloat(getTotalPerPerson())}</span></div>
    </div>
  )
}

export default TotalPerPerson