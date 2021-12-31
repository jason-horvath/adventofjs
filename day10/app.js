const inputs = [...document.querySelectorAll('.fields > input')]
console.log(inputs)

const validKey = (key) => {
  console.log(key)
  return /[0-9]/.test(key)
}

const isLastInput = (key) => {
  return parseInt(key + 1) === parseInt(inputs.length)
}

inputs.forEach((input, key) => {
  console.log(input)
  input.addEventListener('keydown', (e) => {
    e.preventDefault()
    const el = e.target
    if(e.key === 'Backspace') {
      input.value = ''
      if(key > 0) {
        inputs[(key - 1)].focus()
      }
      return
    }
    
    console.log(e)
    console.log(validKey(e.key))
    if(validKey(e.key)) {
      input.value = e.key
    }
    if(!isLastInput(key)) {
      const nextInputKey = parseInt(key + 1)
      el.blur()
      inputs[nextInputKey].focus()
    }
  })
})