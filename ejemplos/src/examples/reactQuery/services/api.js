export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character').then(resp =>
    resp.json()
  )
}

export const getCharaterById = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`).then(resp =>
    resp.json()
  )
}
