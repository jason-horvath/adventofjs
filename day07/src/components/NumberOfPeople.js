const NumberOfPeople = () => {
  return (
    <div className="number-of-people">
      <div className="field">
        <input type="text" id="number-of-people" name="number-of-people" value={numPeople} onChange={(e) => setNumPeople(prev => prev = e.target.value)}/>
      </div>
        <div className="label">Number of People</div>
    </div>
  )
}

export default NumberOfPeople