import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCharacterById } from '../services/api'

export const Character = ({ id }) => {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: [`character:${id}`],
    queryFn: () => getCharacterById(id),
    placeholderData: () => {
      return queryClient.getQueryData(['characters'])?.find(c => c.id === id)
    }
  })

  if (isLoading) return <p>Cargando</p>

  return <div style={{ color: 'white' }}>Character {data.name}</div>
}
