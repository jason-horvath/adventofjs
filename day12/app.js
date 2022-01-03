const pickBeats = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

let userPick = null;
let computerPick = null

const body = document.querySelector('body')
const pickButtons = [...document.querySelectorAll('.pick-one > button')]
const playAgainButton = document.querySelector('.game-result > button.play-again')
const gameStart = document.querySelector('body > .game-start')
const gameResult = document.querySelector('body > .game-result')

const getComputerPick = () => {
  const possiblePicks = Object.keys(pickBeats)
  const pickIndex = Math.floor(Math.random() * possiblePicks.length)
  return possiblePicks[pickIndex]
}

const getGameResultKey = (userPick, computerPick) => {
  if(userPick === computerPick) {
    return 'tie-game'
  }
  if(pickBeats[userPick] == computerPick) {
    return 'you-win'
  }

  return 'computer-wins'
}

const showGameResult = (resultInfo) => {
  const { userPick, computerPick, gameResultKey} = resultInfo
  gameStart.style.display = 'none'
  gameResult.style.display = 'flex'
  body.classList.add('winner', gameResultKey)
  if(gameResultKey !== 'tie-game') {
    const headingElement = document.querySelector('body > .game-result > div > .' + gameResultKey)
    headingElement.style.visibility = 'visible'
  } else {
    document.querySelector('button.play-again').innerText = 'tie game, play again'
  }

  const yourPickImg = document.querySelector('.your-pick > img')
  const computerPickImg = document.querySelector('.computer-pick > img')
  yourPickImg.src = './images/' + userPick +'.png'
  yourPickImg.alt = userPick
  computerPickImg.src = './images/' + computerPick +'.png'
  computerPickImg.alt = computerPick
}

pickButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    userPick = button.value
    computerPick = getComputerPick()
    const gameResultKey = getGameResultKey(userPick, computerPick)
    showGameResult({ userPick, computerPick, gameResultKey })
  })
})

playAgainButton.addEventListener('click', () => {
  window.location.reload()
})

