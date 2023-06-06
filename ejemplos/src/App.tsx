import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { Home } from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
