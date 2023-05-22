import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import List from './components/List'
import './styles.css'
import { useState } from 'react'

const queryClient = new QueryClient()

export const ReactQueryPage = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>¡Rick & Morty!</h1>

        <button onClick={() => setIsShown(x => !x)}>
          {isShown ? 'Ocultar' : 'Mostrar'}
        </button>
        {isShown && <List />}
        {/* <List /> */}
      </div>
    </QueryClientProvider>
  )
}
