const Episode = ({ episode }) => {
  const { id, name } = {...episode}
  const episodeTagString = 'episode-' + id

  const handleCheck = (e) => {
    if(e.shiftKey) {
      console.log(id)
    }
  }

  return (
    <li>
      <label htmlFor={episodeTagString}>
        <input type="checkbox" name={episodeTagString} id={episodeTagString} onClick={(e) => handleCheck(e)} />
        <span>{id} || {name}</span>
      </label>
    </li>
  )
}

export default Episode