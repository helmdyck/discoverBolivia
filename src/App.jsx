import { useState } from 'react'
import Home from "./pages/Home"
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
