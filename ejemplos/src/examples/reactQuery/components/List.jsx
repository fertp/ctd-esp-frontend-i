import { useQuery } from '@tanstack/react-query'
import CharacterCard from './CharacterCrard'
import { getCharacters } from '../services/api'

const List = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters
  })

  if (isLoading) return <div>Cargando personajes...</div>

  if (error)
    return (
      <div>
        Ups, no podemos cargar los personajes en este momento. Por favor intenta
        nuevamente más tarde
      </div>
    )

  return data?.results?.length
    ? data.results.map(personaje => (
        <CharacterCard
          key={personaje.id}
          imagen={personaje.image}
          nombre={personaje.name}
          especie={personaje.species}
        />
      ))
    : null
}

export default List
