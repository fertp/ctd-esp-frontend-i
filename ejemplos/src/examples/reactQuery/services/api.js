export const getCharacters = page => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(resp => resp.json())
    .catch(err => console.log(err))
}

export const getCharacterById = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(resp =>
    resp.json()
  )
}
