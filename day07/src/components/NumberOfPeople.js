import { useContext, useEffect, useRef } from 'react'
import { billActions, BillContext } from '../context/BillContext'
const NumberOfPeople = () => {
  const { bill, dispatch }= useContext(BillContext)
  const peopleRef = useRef()
  const validateNumPeople = (e) => {
    if(e.target.value < 1 || e.target.value === 'undefined') {
      e.target.value = 1
    }
  }

  useEffect(() => {
    document.addEventListener('calculate', () => {
      dispatch({type: billActions.UPDATE_PERSONS, payload: peopleRef.current.value})
    })
  }, [dispatch])
  
  return (
    <div className="number-of-people">
      <div className="field">
        <input
          type="number"
          id="number-of-people"
          name="number-of-people"
          min="1"
          maxLength="3"
          defaultValue={1}
          ref={peopleRef}
          onBlur={(e) => validateNumPeople(e)}
        />
      </div>
        <div className="label">Number of People</div>
    </div>
  )
}

export default NumberOfPeople