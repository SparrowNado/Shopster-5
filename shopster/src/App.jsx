import { useState } from 'react'
import TopNavbar from './components/TopNavbar'


import './App.css'
import Hero  from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopNavbar/>
    <Hero/>
    </>
  )
}

export default App
