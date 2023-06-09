import { MouseEvent, useEffect, useState } from 'react'
import { Character } from './interfaces'
import { CharacterCard } from './components/CharacterCard'

interface Data {
  info: Info
  results: Character[]
}

interface Info {
  count: number
  next: string
  pages: number
  prev: number | null
}

export const TypescriptPage = () => {
  const [data, setData] = useState<Data>({} as Data)
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(resp => resp.json())
      // .then(data => console.log(data))
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [page])

  const characters = data?.results ?? []

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setPage(prev => Math.min(prev + 1, data.info.pages))
  }

  return (
    <main className='container'>
      <h1>Characters</h1>

      <ul>
        {characters.map(c => (
          <CharacterCard
            key={c.id}
            character={c}
          />
        ))}
      </ul>

      <button onClick={handleClick}>next page</button>
    </main>
  )
}
