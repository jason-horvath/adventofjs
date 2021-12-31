const scrollTo = (id) => {
  const scrollElement = document.querySelector('div.thumbnails')
  
  if(id > 3 && scrollElement !== null) {
    const scrollIdOffset = parseInt(id - 2)
    scrollElement.scrollLeft = parseInt(scrollIdOffset * 175)
  } else if (scrollElement !== null)  {
    scrollElement.scrollLeft = 0
  }
}

export default scrollTo