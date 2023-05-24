import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import List from './components/List'
import './styles.css'

const queryClient = new QueryClient()

export const ReactQueryPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>¡Rick & Morty!</h1>
        <List />
      </div>
    </QueryClientProvider>
  )
}
