const TipPercentages = () => {
  const tipData = [
		{
			percent: 0.05,
			id: 'five-percent',
		},
		{
			percent: 0.10,
			id: 'ten-percent',
		},
		{
			percent: 0.15,
			id: 'fifteen-percent',
		},
		{
			percent: 0.20,
			id: 'twenty-percent',
		}
	]
  
  return (
    <div className="tip-percentages">
      {tipData.map((tip, key) => {
        return (
          <div key={key}>
          <input type="radio" name="tip" value={tip.percent} id={tip.id} onChange={(e) => handleTip(e)} />
          <label htmlFor={tip.id}>
            {tip.percent * 100}%
          </label>
        </div>
        )
      })}
    </div>
  )
}