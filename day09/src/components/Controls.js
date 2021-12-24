import { useContext } from 'react'
import { CarouselContext } from '../context/CarouselContext'

const Controls = () => {
  const { dispatch } = useContext(CarouselContext)
  const shiftPhoto = (actionType) => {
    return dispatch({type: actionType})
  }
  return (
    <>
      <button className="left" value="previousPhoto" onClick={(e) => shiftPhoto('previousPhoto')}>
        <img src="./images/chevron.svg" alt="Previous"/>
      </button>
      <button className="right" value="nextPhoto" onClick={(e) => shiftPhoto('nextPhoto')}>
        <img src="./images/chevron.svg" alt="Next"/>
        </button>
    </>
  )
}
export default Controls