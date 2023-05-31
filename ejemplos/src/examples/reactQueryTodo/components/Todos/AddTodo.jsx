import { useMutation, useQueryClient } from '@tanstack/react-query'
import { saveTodo } from '../../services/api'
import { useRef } from 'react'
import { v1 as uuid } from 'uuid'

export const AddTodo = () => {
  const inputRef = useRef(null)

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: ['add-todo'],
    mutationFn: todo => saveTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      inputRef.current.value = ''
    }
  })

  const handleClick = () => {
    mutate({
      id: uuid(),
      name: inputRef.current.value,
      completed: false
    })
  }

  return (
    <div>
      <input
        ref={inputRef}
        type='text'
      />
      <button onClick={handleClick}>+</button>
    </div>
  )
}
