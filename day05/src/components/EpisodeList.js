import { useState } from 'react'
import episodes from '../data/episodes.js'
import Episode from './Episode.js'

const EpisodeList = () => {

  let shiftKey = false;
  document.addEventListener('keydown', (e) => {
    shiftKey = e.shiftKey
  })

  const initialCheckState = () => {
    let checkState = {}
    episodes.forEach((episode) => {
      const { id } = {...episode}
      checkState[id] = false;
    })
    return checkState
  }

  const [checkState, setCheckState] = useState(() => initialCheckState())
  
  const updateChecks = (updateObject) => {
    setCheckState(prev => {
      return { ...prev, ...updateObject }
    })
  }

  const getHighPreviousCheck = (id) => {
    let highestChecked = 0
    Object.keys(checkState).forEach(key => {
      if(key <= id && checkState[key] === true) {
        highestChecked = key;
      }
    })
    return highestChecked
  }

  const checkStateHandler = (e) => {
    let id = parseInt(e.target.name.split('-')[1])
    let checksToUpdate = {}
    if (shiftKey) {
      let highPreviousCheck = getHighPreviousCheck(id)
      Object.keys(checkState).forEach(key => {
        if(key <= id && key > highPreviousCheck && checkState[id] === false) {
          checksToUpdate[key] = true;
        }
      })
    } else {
      checksToUpdate[id] = !checkState[id]
    }
    updateChecks(checksToUpdate)
  }
  
  return (
    <ul className="episodes">
      {episodes.map(episode => {
        const { id } = {...episode}
        return <Episode key={id} episode={episode} checkState={checkState} checkStateHandler={checkStateHandler} />
      })}
    </ul>
  )
}

export default EpisodeList