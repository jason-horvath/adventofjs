import priceString from '../utility/priceString'

const TotalPerPerson = () => {
  return (
    <div className="total-per-person">
      <div className="label">Total Per Person</div>
      <div className="dollars"><sup>$</sup><span id="total-per-person">{priceString(perPerson)}</span></div>
    </div>
  )
}

export default TotalPerPerson