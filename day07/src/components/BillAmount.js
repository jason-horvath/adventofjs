const BillAmount = () => {
  return (
    <div className="bill-amount">
      <div className="field">
        <input type="text" id="bill-amount" name="bill-amount" value={priceString(bill)} onChange={(e) => handleBillAmount(e)} />
      </div>
      <div className="label">Bill Amount</div>
    </div>
  )
}