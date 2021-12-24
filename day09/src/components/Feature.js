import { useContext } from 'react'
import { CarouselContext } from '../context/CarouselContext'
const Feature = () => {
  const { carouselState } = useContext(CarouselContext)
  const { src, caption } = carouselState.photos[carouselState.selected]

  return (
    <div className="feature">
      <img src={`images/${src}`} alt={caption} />
    <div className="caption">Photo by Dave Hoefler Unsplash</div>
  </div>
  )
}
export default Feature