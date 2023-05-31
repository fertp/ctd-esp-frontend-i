export const getTodos = () => {
  return fetch('http://localhost:4000/todos')
    .then(resp => resp.json())
    .catch(err => console.log(err))
}

export const saveTodo = todo => {
  return fetch('http://localhost:4000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
}
