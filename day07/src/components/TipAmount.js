import priceString from "../utility/priceString"
const TipAmount = () => {
  return (
    <div className="tip-amount">
      <div className="label">Tip Amount</div>
      <div className="dollars"><sup>$</sup><span id="tip-amount">{priceString(tip)}</span></div>
    </div>
  )
}

export default TipAmount