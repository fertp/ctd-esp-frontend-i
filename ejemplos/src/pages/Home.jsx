import { Link } from 'react-router-dom'
import { routes } from '../routes'

const styles = {
  main: {
    maxWidth: '960px',
    marginInline: 'auto'
  }
}

export const Home = () => {
  return (
    <main style={styles.main}>
      <h1>Ejemplos Esp. Frontend 2</h1>

      <ul>
        {routes.map(({ name, path }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
