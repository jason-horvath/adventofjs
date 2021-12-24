import { createContext, useState } from 'react'
import photos from '../data/photos'

const CarouselContext = createContext()

const carouselActions = {
  SELECT_PHOTO: 'selectPhoto',
  PREVIOUS_PHOTO: 'previousPhoto',
  NEXT_PHOTO: 'nextPhoto'
}

const carouselReducer = (state, action) => {
  const photosLength = Object.keys(state.photos).length
  switch(action.type) {
    case carouselActions.SELECT_PHOTO:
      state.selected = action.payload
      break
    case carouselActions.PREVIOUS_PHOTO:
      if(state.selected > 1) {
        state.selected--
      } else {
        state.selected = photosLength
      }
      break
    case carouselActions.NEXT_PHOTO:
      if(state.selected < photosLength) {
        state.selected++
      } else {
        state.selected = 1
      }
      break
    default:
      break
  }
  return Object.assign({}, {...state})
}

const CarouselProvider = ({ children }) => {
  const [carouselState, setCarouselState] = useState(() => {
    return {
      photos: photos,
      selected: 1
    }
  })
  
  const dispatch = (action) => {
    const updatedState = carouselReducer(carouselState, action)
    setCarouselState(updatedState)
  }

  const value = { dispatch, carouselState }
  return (
    <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
  )
}

export { carouselActions, CarouselContext, CarouselProvider, carouselReducer }