import { useContext } from 'react'
import Thumbnail from './Thumbnail'
import { CarouselContext } from '../context/CarouselContext'

const Thumbnails = () => {
  const { carouselState } = useContext(CarouselContext)

  return (
    <div className="thumbnails">
    <ul>
      {Object.keys(carouselState.photos).map((id) => {
        let { src, caption } = carouselState.photos[id]
        return <Thumbnail key={id} id={id} src={src} caption={caption} /> 
      })}
      
    </ul>
  </div>
  )
}
export default Thumbnails