import { useContext, useEffect, useState } from 'react'
import { BillContext } from '../context/BillContext'
import priceString from '../utility/priceString'

const TotalPerPerson = () => {
  const { bill } = useContext(BillContext)
  const [perPerson, setPerPerson] = useState(0.00)
  const updatePerPerson = () => {
    const billPlusTip = bill.total + (bill.total * bill.tipPercent)
    setPerPerson(billPlusTip / bill.numPersons)
  }

  useEffect(() => {
    document.addEventListener('calculate', () => {
      updatePerPerson()
    })
  }, [updatePerPerson])
  return (
    <div className="total-per-person">
      <div className="label">Total Per Person</div>
      <div className="dollars"><sup>$</sup><span id="total-per-person">{priceString(perPerson)}</span></div>
    </div>
  )
}

export default TotalPerPerson