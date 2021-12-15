import { useState, useEffect } from 'react'
import episodes from '../data/episodes.js'
import Episode from './Episode.js'

const EpisodeList = () => {
  const [episodeState, setEpisodeState] = useState({})
  const manageChecklist = (id) => {
    // const updateObject = Object.assign({}, episodeState)

  }

  useEffect(() => {
    const updateObject = {}
    episodes.forEach((episode) => {
      const { id } = {...episode}
      // console.log(episodeState)
      Object.assign(updateObject, {...episodeState})
      updateObject[id] = false;
      // console.log(updateObject)  
      
    })
    
    console.log(setEpisodeState({...updateObject}));
    console.log(updateObject)
    console.log(episodeState)
  }, episodeState)

  return (
    <ul className="episodes">
      {episodes.map(episode => {
        const { id } = {...episode}
        return <Episode key={id} episode={episode} onClick={(e) => manageChecklist(id)} />
      })}
    </ul>
  )
}

export default EpisodeList