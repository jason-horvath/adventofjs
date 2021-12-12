class Jiggle {

  jiggleClass = 'jiggle'

  keyElements = [...document.querySelectorAll('[data-key]')]

  currentJiggleElement = null

  constructor() {
    this.randomJiggle()
    this.bindKeys()
  }

  bindKeys = () => {
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      // Html has DEL as the display, but BACKSPACE as the data-key value. This is to not modify source data.
      const keyPressValue = e.key.toUpperCase() === 'DELETE' ? 'BACKSPACE' : e.key.toUpperCase() 
      if(keyPressValue == this.currentJiggleKey().toUpperCase()) {
        this.removeJiggle(this.currentJiggleElement)
        this.randomJiggle()
      }
    })
  }

  randomJiggle = () => {
    this.currentJiggleElement = this.randomElement()
    this.addJiggle(this.currentJiggleElement);
  }

  randomElement = () => {
    return this.keyElements[this.randomIndex()]
  }

  randomIndex = () => {
    return Math.floor(Math.random() * this.keyElements.length)
  }

  currentJiggleKey = () => {
    return this.currentJiggleElement?.getAttribute('data-key');
  }

  addJiggle = (element) => {
    element.classList.add(this.jiggleClass)
  }

  removeJiggle = (element) => {
    element.classList.remove(this.jiggleClass)
  }
}