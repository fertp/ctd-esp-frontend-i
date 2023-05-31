import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TodosList } from './components/Todos/TodosList'
import { AddTodo } from './components/Todos/AddTodo'

const queryClient = new QueryClient()

export const ReactQueryTodoPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Todos</h1>
        <AddTodo />
        <TodosList />
      </div>
    </QueryClientProvider>
  )
}
