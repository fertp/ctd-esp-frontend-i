import { FC } from 'react'
import type { Character } from '../interfaces'

interface Props {
  character: Character
}

export const CharacterCard: FC<Props> = ({ character }) => {
  return (
    <li key={character?.id}>
      <img
        src={character?.image}
        alt={character?.name}
      />
      <p>{character?.name}</p>
      <p>{character?.species}</p>
    </li>
  )
}
