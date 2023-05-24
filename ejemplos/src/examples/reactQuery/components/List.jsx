import { useQuery } from '@tanstack/react-query'
import CharacterCard from './CharacterCrard'
import { getCharacters } from '../services/api'
import { useState } from 'react'
import charactersData from '../data/characters.json'

const List = () => {
  const [page, setPage] = useState(1)

  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => getCharacters(page),
    keepPreviousData: true,
    initialData: charactersData, // Este se guarda en caché
    placeholderData: charactersData
  })

  if (isLoading)
    return <div style={{ color: 'white' }}>Cargando personajes...</div>

  if (error)
    return (
      <div>
        Ups, no podemos cargar los personajes en este momento. Por favor intenta
        nuevamente más tarde
      </div>
    )

  return (
    <div>
      <span style={{ color: 'white' }}>
        {page}
        {isFetching ? 'Loading' : ''}
      </span>
      <button onClick={() => setPage(Math.max(page - 1, 1))}>Anterior</button>
      <button onClick={() => setPage(Math.min(page + 1, data.info.pages))}>
        Siguiente
      </button>
      {data?.results?.length
        ? data.results.map(personaje => (
            <CharacterCard
              key={personaje.id}
              imagen={personaje.image}
              nombre={personaje.name}
              especie={personaje.species}
            />
          ))
        : null}
    </div>
  )
}

export default List
