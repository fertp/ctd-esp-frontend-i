import { Todo } from './Todo'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '../../services/api'

export const TodosList = () => {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })

  // console.log(data)

  const todos = data ?? []

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}
