import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './components/counter1'
import Counter2 from './components/counter2'
import Counter3 from './components/counter3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Counter2/>
  )
}

export default App
