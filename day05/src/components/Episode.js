const Episode = ({ episode, checkState, checkStateHandler }) => {
  const { id, name } = {...episode}
  const episodeTagString = 'episode-' + id

  return (
    <li>
      <label htmlFor={episodeTagString}>
        <input type="checkbox" name={episodeTagString} id={episodeTagString} onChange={(e) => checkStateHandler(e)} checked={checkState[id]} />
        <span>{id} || {name}</span>
      </label>
    </li>
  )
}

export default Episode