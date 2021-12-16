import { useRef, useState } from 'react'
import Slider from './components/Slider'
import './App.css'

function App() {
  const sliderInit ={
    value: 5000,
    step: 500,
    min: 0,
    max: 10000
  }
  const [sliderState, setSliderState] = useState(() => sliderInit.value)
  const sliderRef = useRef(sliderInit.value)
  const slideHandler = () => {
    if(Math.abs(sliderState - sliderRef.current.value) === sliderInit.step) {
      setSliderState(prev => prev = sliderRef.current.value)
    }
  }

  return (
    <div className="wrapper">
      <div className="amount">
        <sup>$</sup>
        <span className="dollars">{(sliderState / 100).toFixed(2)}</span>
      </div>
        <Slider
          sliderInit={sliderInit}
          sliderRef={sliderRef}
          sliderState={sliderState}
          slideHandler={slideHandler}
        />
      <br />
      <button>Buy Now</button>
    </div>
  );
}

export default App;
