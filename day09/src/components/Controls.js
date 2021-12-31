import { useContext } from 'react'
import { CarouselContext } from '../context/CarouselContext'
import scrollTo from '../utility/scrollTo'

const Controls = () => {
  const { carouselState, dispatch } = useContext(CarouselContext)
  const shiftPhoto = (actionType) => {
    dispatch({type: actionType})
    scrollTo(carouselState.selected)
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