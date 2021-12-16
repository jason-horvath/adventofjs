const Slider = ({sliderInit, sliderRef, sliderState, slideHandler}) => {
    return (
      <>
        <input type="range" id="priceRange"
          min={sliderInit.min}
          max={sliderInit.max}
          step={sliderInit.step}
          value={sliderState}
          ref={sliderRef}
          onInput={(e) => slideHandler(e)}
        />
      </>
    )
}

export default Slider