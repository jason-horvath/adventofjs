const inputs = [...document.querySelectorAll('.fields > input')]
const verifyButton = document.querySelector('.wrapper > form > button')

const validInput = (key) => {
  return /[0-9]/.test(key)
}

const isLastInput = (key) => {
  return parseInt(key + 1) === parseInt(inputs.length)
}
const getCode = () => {
  const values = []
  inputs.forEach(input => values.push(input.value))
  return values.join('');
}

const runVerification = () => {
  console.log('Verifying: ' + getCode())
}

const populateFromClipBoard = () => {
  return navigator.clipboard.readText().then((pasted) => {
    const populateValues = pasted.substring(0, 4).split('')
    populateValues.forEach((value, index) => {
      if(validInput(value)) {
        inputs[index].value = value
        console.log(value)
      }
    })
    runVerification()
  }).catch(() => console.error('Clipboard error'))
}

const handleInput = (props) => {
  const { e, input, key } = props
  e.preventDefault()
  if((e.metaKey === true || e.ctrlKey === true) && e.key.toLowerCase() === 'v') {
    populateFromClipBoard()
    return
  }
  
  const el = e.target
  if(e.key === 'Backspace') {
    input.value = ''
    if(key > 0) {
      inputs[(key - 1)].focus()
    }
    return
  }

  if(validInput(e.key)) {
    input.value = e.key
  } else {
    return
  }

  if(!isLastInput(key)) {
    const nextInputKey = parseInt(key + 1)
    el.blur()
    inputs[nextInputKey].focus()
    return
  } 
  runVerification()
}
inputs.forEach((input, key) => {
  input.addEventListener('keydown', (e) => handleInput({input, key, e}))
})

verifyButton.addEventListener('click', (e) => {
  e.preventDefault()
  runVerification()
})