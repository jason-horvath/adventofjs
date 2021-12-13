import episodes from '../data/episodes.js'
import Episode from './Episode.js'

const EpisodeList = () => {

  return (
    <ul className="episodes">
      {episodes.map(episode => {
        return <Episode key={episode.id} episode={episode} />
      })}
    </ul>
  )
}

export default EpisodeList