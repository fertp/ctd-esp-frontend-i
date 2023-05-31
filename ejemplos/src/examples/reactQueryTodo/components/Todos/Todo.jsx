import PropTypes from 'prop-types'

export const Todo = ({ todo }) => {
  return <li>{todo.name}</li>
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })
}
