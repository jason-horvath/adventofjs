import priceString from '../utility/priceString'

const BillAmount = () => {
  return (
    <div className="bill-amount">
      <div className="field">
        <input type="text" id="bill-amount" name="bill-amount" value={priceString(0)} onChange={(e) => console.log(e)} />
      </div>
      <div className="label">Bill Amount</div>
    </div>
  )
}

export default BillAmount