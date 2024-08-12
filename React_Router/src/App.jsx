import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Components/Layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 class="bg-black text-white p-4">
        Tailwind
      </h2>
      <Layout/>
    </>
  )
}

export default App
