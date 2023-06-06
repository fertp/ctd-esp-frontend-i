import { ChangeEvent, FormEvent, useState } from 'react'
import { sum } from './utils'

type Result = null | number

export const TypescriptPage = () => {
  const [values, setValues] = useState({
    numA: '',
    numB: ''
  })

  const [result, setResult] = useState<Result>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    setResult(null)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result: number = sum(Number(values.numA), Number(values.numB))
    setResult(result)
  }

  return (
    <main className='container'>
      <h1>Typescript</h1>

      <br />

      <form>
        <input
          type='text'
          name='numA'
          value={values.numA}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='numB'
          value={values.numB}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Sumar</button>
      </form>

      {result !== null && <p>El resultado es: {result}</p>}
    </main>
  )
}
