import { useContext } from 'react'
import { carouselActions, CarouselContext } from '../context/CarouselContext'

const Thumbnail = ({ caption , id, src }) => {
  const { carouselState, dispatch } = useContext(CarouselContext)

  const currentlySelected = (id) => {
    return parseInt(carouselState.selected) === parseInt(id)
  }

  const handleSelectPhoto = (id) => {
    dispatch({type: carouselActions.SELECT_PHOTO, payload: id })
  }
  return (
    <li key={id} className={currentlySelected(id) ? 'selected' : ''}>
    <button onClick={() => handleSelectPhoto(id)}>
      <img src={`images/${src}`} alt={caption}/>
    </button>
    </li>
  )
}

export default Thumbnail